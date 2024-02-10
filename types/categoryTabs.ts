interface ICategory {
  id: number
  title: string
  value: string
}
interface ILand {
  id: 0 | 1 | 2
  title: string

  thumbImgSrc: string
  mainImgSrc: string
}
export type { ICategory, ILand }
