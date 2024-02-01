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
const ModalContent = {}

const ModalBody = styled.div``

const Container = styled.div<{ isOverlayClicked: Boolean }>``

const CloseButtonWrapper = styled.div``

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
