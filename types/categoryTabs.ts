import { IIsland } from "@/types/common/islandProps"

interface ICategory {
  id: number
  title: string
  value: string
}

interface ILand {
  id: IIsland["landType"]
  title: string

  thumbImgSrc: string
  mainImgSrc: string
}
export type { ICategory, ILand }
