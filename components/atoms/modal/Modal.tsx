import { FADE_IN, FADE_OUT, POP_IN, POP_OUT } from "@/constants/animations"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import Image from "next/image"
import { ModalContextProps, ModalRootProps } from "@/types/common/modalProps"
import styled from "@emotion/styled"
import Close from "@/public/assets/image/close.svg"
import { css } from "@emotion/react"

const ModalContext = createContext<ModalContextProps>({})
const ModalRoot = ({
  children,
  isOpen,
  closeOnOverlayClick,
  onClose,
}: ModalRootProps) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [isOverlayClicked, setOverlayClicked] = useState(false)

  // body scroll 방지
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  // overlay 클릭 시 작동
  useEffect(() => {
    const overlayElement = overlayRef.current
    const handleClick = (e: MouseEvent) => {
      if (e.target === overlayElement) {
        setOverlayClicked(true)
        setTimeout(() => {
          onClose()
          setOverlayClicked(false)
        }, 150)
      }
    }
    if (closeOnOverlayClick === false) {
      return
    }
    if (overlayElement) {
      overlayElement.addEventListener("mousedown", handleClick)
    }
    return () => {
      if (overlayElement) {
        overlayElement.removeEventListener("mousedown", handleClick)
      }
    }
  }, [isOverlayClicked, onClose])
  console.log(isOpen)

  if (!isOpen) return null
  return (
    <ModalContext.Provider
      value={{ isOpen, isOverlayClicked, onClose, setOverlayClicked }}
    >
      <Container ref={overlayRef} isOverlayClicked={isOverlayClicked}>
        {children}
      </Container>
    </ModalContext.Provider>
  )
}
const ModalCloseButton = ({ imgSrc }: { imgSrc?: string }) => {
  const { onClose, setOverlayClicked } = useContext(ModalContext)
  if (!setOverlayClicked || !onClose) {
    return null
  }
  const handleClick = () => {
    setOverlayClicked(true)
    setTimeout(() => {
      onClose()
      setOverlayClicked(false)
    }, 150)
  }

  return (
    <CloseButtonWrapper onClick={handleClick}>
      {imgSrc ? (
        <Image src={imgSrc} width={32} height={32} alt="close icon" />
      ) : (
        <Close size={32} alt="close icon" />
      )}
    </CloseButtonWrapper>
  )
}
const ModalContent = ({
  children,
  height,
  width,
}: {
  children: ReactNode
  height: number
  width: number
}) => {
  const { isOverlayClicked } = useContext(ModalContext)
  if (isOverlayClicked) {
    return null
  }
  return (
    <Content height={height} width={width} isOverlayClicked={isOverlayClicked}>
      {children}
    </Content>
  )
}

type ModalInnerStyle = Pick<ModalContextProps, "isOverlayClicked">

type ModalContentStyle = ModalInnerStyle & {
  width: number
  height: number
}

const ModalBody = styled.div`
  background-color: white;
  &.scroll {
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  &.scroll::-webkit-scrollbar {
    display: none;
  }
`

const Container = styled.div<ModalInnerStyle>`
  z-index: 100;
  animation: ${FADE_IN} 200ms;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.isOverlayClicked &&
    css`
      animation: ${FADE_OUT} 250ms;
    `}
`

const Content = styled.div<ModalContentStyle>`
  overflow: hidden;
  position: absolute;
  padding-top: 5rem;
  border-radius: 1.5rem;
  animation: ${POP_IN} 200ms;
  background-color: white;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  ${(props) =>
    props.isOverlayClicked &&
    css`
      animation: ${POP_OUT} 250ms;
    `}
`

const CloseButtonWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  background-color: transparent;
`

const Modal = Object.assign(
  {},
  {
    Root: ModalRoot,
    CloseButton: ModalCloseButton,
    Content: ModalContent,
    Body: ModalBody,
  }
)

export default Modal
