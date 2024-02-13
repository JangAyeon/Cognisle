import { ReactNode } from "react"

export interface IBackgroundLayout {
  height?: number
  width?: number
  imgSrc?: string
  startColor: string
  endColor: string
  imgWidth?: number
  imgHeight?: number
  degree: string
  children: ReactNode
}
