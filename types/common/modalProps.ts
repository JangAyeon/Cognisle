import { ReactNode } from "react"

type ModalContextProps = {
  isOpen?: boolean
  isOverlayClicked?: boolean
  closeOnOverlayClick?: boolean
  onClose?: () => void
  setOverlayClicked?: (state: boolean) => void
}

type ModalRootProps = {
  children: ReactNode
  isOpen: boolean
  closeOnOverlayClick?: boolean
  onClose: () => void
}

type ModalContentProps = {
  children: ReactNode
  height: number
  width: number
  pointColor: string
}

export type { ModalContextProps, ModalRootProps, ModalContentProps }
