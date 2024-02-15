import unionTypeChecker from "@/utils/unionTypeChecker"

type LandIdProps = 0 | 1 | 2

type itemIdProps =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24
type ItemExistProps = { [key: string]: boolean }
type ItemLocationProps = { [key: string]: object | null }

const itemIdArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
] as const

type ItemIdProps = (typeof itemIdArr)[number]
const isLandItemIdType = unionTypeChecker(...itemIdArr)

const landTypeIdArr = [0, 1, 2] as const
type TypeIdProps = (typeof landTypeIdArr)[number]
const isLandTypeIdType = unionTypeChecker(...landTypeIdArr)

interface IIsland {
  landType: TypeIdProps
  items: ItemLocationProps
  exist: ItemIdProps | []
}

export type { IIsland, ItemExistProps, LandIdProps, itemIdProps }

export { isLandItemIdType }
