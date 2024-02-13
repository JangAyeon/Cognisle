import { LandIdProps } from "@/types/common/islandProps"

interface ICategory {
  id: number
  title: string
  value: string
}

interface ILand {
  id: LandIdProps
  title: string

  thumbImgSrc: string
  mainImgSrc: string
}
export type { ICategory, ILand }
