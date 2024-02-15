import unionTypeChecker from "@/utils/unionTypeChecker"

const landItemIdArr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
] as const

type ItemIdProps = (typeof landItemIdArr)[number]
const isLandItemIdType = unionTypeChecker(...landItemIdArr)

type ItemExistKey = `exist_${ItemIdProps}`
type ItemExistProps = {
  [key in ItemExistKey]: boolean
}

const landTypeIdArr = [0, 1, 2] as const
type TypeIdProps = (typeof landTypeIdArr)[number]
const isLandTypeIdType = unionTypeChecker(...landTypeIdArr)
type ItemLocationKey = `loc_${ItemIdProps}`
type ItemLocationProps = {
  [key in ItemLocationKey]: object | null
}

const landTypeTitleArr = ["morning", "evening", "night"] as const
type TypeTitleProps = (typeof landTypeTitleArr)[number]
const isLandTypeTitleType = unionTypeChecker(...landTypeTitleArr)

interface IIsland {
  landType: TypeIdProps
  items: ItemLocationProps
  exist: ItemIdProps[]
}

export type {
  IIsland,
  ItemExistProps,
  ItemExistKey,
  TypeTitleProps,
  ItemIdProps,
}

export { isLandItemIdType }
