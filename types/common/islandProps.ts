type LandIdProps = 0 | 1 | 2

type ItemExistProps = { [key: string]: boolean }
type ItemLocationProps = { [key: string]: object | null }

interface IIsland {
  background: LandIdProps
  items: ItemLocationProps
}

export type { IIsland, ItemExistProps, LandIdProps }
