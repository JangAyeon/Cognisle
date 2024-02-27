import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Image from "next/image"
import { createContext, useContext, useEffect, useRef, useState } from "react"

import { FADE_IN, FADE_OUT, POP_IN, POP_OUT } from "@/constants/animations"

import {
  ModalCloseProps,
  ModalContentProps,
  ModalContextProps,
  ModalRootProps,
} from "@/types/common/modalProps"

import Close from "@/public/assets/image/close.svg"

const ModalContext = createContext<ModalContextProps>({})
const ModalRoot = ({
  children,
  isOpen,
  closeOnOverlayClick,
  backgroundColor,
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

  if (!isOpen) return null
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        isOverlayClicked,
        onClose,
        setOverlayClicked,
      }}
    >
      <Container
        ref={overlayRef}
        isOverlayClicked={isOverlayClicked}
        backgroundColor={backgroundColor}
      >
        {children}
      </Container>
    </ModalContext.Provider>
  )
}
const ModalCloseButton = ({
  imgSrc,
  needClose = true,
  size = 32,
}: ModalCloseProps) => {
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
    needClose && (
      <CloseButtonWrapper onClick={handleClick}>
        {imgSrc ? (
          <Image src={imgSrc} width={size} height={size} alt="close icon" />
        ) : (
          <Close size={size} alt="close icon" />
        )}
      </CloseButtonWrapper>
    )
  )
}
const ModalContent = ({
  children,
  height,
  width,
  pointColor,
  backgroundColor,
}: ModalContentProps) => {
  const { isOverlayClicked } = useContext(ModalContext)
  if (isOverlayClicked) {
    return null
  }
  return (
    <Content
      height={height}
      width={width}
      isOverlayClicked={isOverlayClicked}
      backgroundColor={backgroundColor ? backgroundColor : "--color-yellow-01"}
    >
      <Point pointColor={pointColor ? pointColor : backgroundColor} />
      {children}
    </Content>
  )
}

type ModalPointStyle = Pick<ModalContentProps, "pointColor">

type ModalInnerStyle = Pick<
  ModalContextProps,
  "isOverlayClicked" | "backgroundColor"
>

type ModalContentStyle = ModalInnerStyle &
  Pick<ModalContentProps, "width" | "height" | "backgroundColor">

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
  min-width: 100%;
  min-height: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : `rgba(0, 0, 0, 0.7)`};
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
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  animation: ${POP_IN} 200ms;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `var(${backgroundColor})` : `var(--color-yellow-01)`};

  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  ${(props) =>
    props.isOverlayClicked &&
    css`
      animation: ${POP_OUT} 250ms;
    `}
`

const Point = styled.div<ModalPointStyle>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ pointColor }) => `var(${pointColor})`};
  clip-path: polygon(100% 0%, 0% 0%, 0% 100%);
  width: 5rem;
  height: 5.7rem;
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
