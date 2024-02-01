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
    if (!closeOnOverlayClick) {
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
  }, [closeOnOverlayClick, onClose])

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
const ModalCloseButton = ({ imgSrc }: { imgSrc: string }) => {
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
        <Close size={32} />
      ) : (
        <Image src={imgSrc} width={32} height={32} alt="close icon" />
      )}
    </CloseButtonWrapper>
  )
}
const ModalContent = ({ children }: { children: ReactNode }) => {
  const { isOverlayClicked } = useContext(ModalContext)
  if (!isOverlayClicked) {
    return null
  }
  return <Content isOverlayClicked={isOverlayClicked}>{children}</Content>
}

type ModalInnerStyle = Pick<ModalContextProps, "isOverlayClicked">

const ModalBody = styled.div`
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
  animation: ${({ isOverlayClicked }) =>
    isOverlayClicked ? `${FADE_IN} 200ms` : `${FADE_OUT} 250ms`};
`

const Content = styled.div<ModalInnerStyle>`
  overflow: hidden;
  position: absolute;
  border-radius: 15px;
  animation: ${({ isOverlayClicked }) =>
    isOverlayClicked ? `${POP_IN} 200ms` : `${POP_OUT} 250ms`};
`

const CloseButtonWrapper = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 3.2rem;
  margin-right: 3.2rem;
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
