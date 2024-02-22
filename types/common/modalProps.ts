import { ReactNode } from "react"

import { IGameResult } from "@/types/common/gameProps"
import { Color } from "@/types/common/styleProps"
import { IRecordItem } from "@/types/recordItem"

type ModalContextProps = {
  isOpen?: boolean
  isOverlayClicked?: boolean
  closeOnOverlayClick?: boolean
  backgroundColor?: string

  onClose?: () => void
  setOverlayClicked?: (state: boolean) => void
}

type ModalRootProps = {
  children: ReactNode
  isOpen: boolean
  closeOnOverlayClick?: boolean
  backgroundColor?: string
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
  pointColor: Color
  backgroundColor?: Color
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
  ModalProps,
  ModalRootProps,
  ModalContentProps,
  ShowItemModalProps,
  ModalCloseProps,
  GameResultModalProps,
}
