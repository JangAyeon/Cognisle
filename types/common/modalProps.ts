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

export type { ModalContextProps, ModalRootProps }
