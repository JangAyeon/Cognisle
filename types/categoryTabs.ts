interface ICategory {
  id: number
  title: string
  value: string
}

type LandIdProps = 0 | 1 | 2
interface ILand {
  id: LandIdProps
  title: string

  thumbImgSrc: string
  mainImgSrc: string
}
export type { ICategory, LandIdProps, ILand }
