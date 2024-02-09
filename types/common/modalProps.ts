import { IRecordItem } from "@/types/recordItem"
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

type ShowItemModalProps = {
  itemId: IRecordItem["id"]
  isOpen: boolean
  onClose: () => void
  pointColor: string
}

export type {
  ModalContextProps,
  ModalRootProps,
  ModalContentProps,
  ShowItemModalProps,
}
