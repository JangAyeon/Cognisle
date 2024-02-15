import { ReactNode } from "react"

import { IGameResult } from "@/types/common/gameProps"
import { IRecordItem } from "@/types/recordItem"

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

type ModalCloseProps = {
  imgSrc?: string
  needClose?: boolean
}

type ModalContentProps = {
  children: ReactNode
  height: number
  width: number
  pointColor: string
}

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

type ShowItemModalProps = ModalProps & {
  itemId: IRecordItem["id"]
}
type GameResultModalProps = ModalProps & {
  gameResult: IGameResult
}
export type {
  ModalContextProps,
  ModalRootProps,
  ModalContentProps,
  ShowItemModalProps,
  ModalCloseProps,
  GameResultModalProps,
}
