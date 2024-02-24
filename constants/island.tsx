import { ReactElement } from "react"

import {
  IIsland,
  ItemIdProps,
  TypeTitleProps,
} from "@/types/common/islandProps"
import { IBackgroundLayout } from "@/types/common/layoutProps"

import Item_1 from "@/public/assets/item/item_1.svg"
import Item_2 from "@/public/assets/item/item_2.svg"
import Item_3 from "@/public/assets/item/item_3.svg"
import Item_4 from "@/public/assets/item/item_4.svg"
import Item_5 from "@/public/assets/item/item_5.svg"
import Item_6 from "@/public/assets/item/item_6.svg"
import Item_7 from "@/public/assets/item/item_7.svg"
import Item_8 from "@/public/assets/item/item_8.svg"
import Item_9 from "@/public/assets/item/item_9.svg"
import Item_10 from "@/public/assets/item/item_10.svg"
import Item_11 from "@/public/assets/item/item_11.svg"
import Item_12 from "@/public/assets/item/item_12.svg"
import Item_13 from "@/public/assets/item/item_13.svg"
import Item_14 from "@/public/assets/item/item_14.svg"
import Item_15 from "@/public/assets/item/item_15.svg"
import Item_16 from "@/public/assets/item/item_16.svg"
import Item_17 from "@/public/assets/item/item_17.svg"
import Item_18 from "@/public/assets/item/item_18.svg"
import Item_19 from "@/public/assets/item/item_19.svg"
import Item_20 from "@/public/assets/item/item_20.svg"
import Item_21 from "@/public/assets/item/item_21.svg"
import Item_22 from "@/public/assets/item/item_22.svg"
import Item_23 from "@/public/assets/item/item_23.svg"
import Item_24 from "@/public/assets/item/item_24.svg"
import Item_25 from "@/public/assets/item/item_25.svg"

type landBackgroundProps = Record<
  IIsland["landType"],
  {
    startColor: IBackgroundLayout["startColor"]
    endColor: IBackgroundLayout["endColor"]
  }
>

interface ILandTypeChoice {
  id: IIsland["landType"]
  title: TypeTitleProps
  thumbImgSrc: string
  mainImgSrc: string
}

interface ILandItem {
  id: number
  title: string
  thumbImgSrc: string
  mainImgSrc: string
  width: number
  height: number
  svg: ReactElement
}

type ILandItemChoice = {
  [key in ItemIdProps]: ILandItem
}

const BACKGROUND_COLOR: landBackgroundProps = {
  0: { startColor: "--gradient-yellow", endColor: "--color-green-03" },
  1: { startColor: "--color-orange-03", endColor: "--color-pink-01" },
  2: { startColor: "--color-blue-03", endColor: "--color-blue-04" },
}

const LAND_CHOICE: ILandTypeChoice[] = [
  {
    id: 0,
    title: "morning",
    thumbImgSrc: "/assets/control/background/morning.png",
    mainImgSrc: "/assets/control/land/morning.png",
  },
  {
    id: 1,
    title: "evening",
    thumbImgSrc: "/assets/control/background/evening.png",
    mainImgSrc: "/assets/control/land/evening.png",
  },
  {
    id: 2,
    title: "night",
    thumbImgSrc: "/assets/control/background/night.png",
    mainImgSrc: "/assets/control/land/night.png",
  },
]

const ITEM_SIZE = {
  width: 60,
  height: 60,
}
const ITEM_CHOICE: ILandItemChoice = {
  0: {
    id: 0,
    title: "Item_0",
    thumbImgSrc: "/assets/item/item_1.svg",
    mainImgSrc: "/assets/item/item_1.svg",
    svg: <Item_1 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  1: {
    id: 1,
    title: "Item_1",
    thumbImgSrc: "/assets/item/item_1.svg",
    mainImgSrc: "/assets/item/item_1.svg",
    svg: <Item_1 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  2: {
    id: 2,
    title: "Item_2",
    thumbImgSrc: "/assets/item/item_2.svg",
    mainImgSrc: "/assets/item/item_2.svg",
    svg: <Item_2 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  3: {
    id: 3,
    title: "Item_3",
    thumbImgSrc: "/assets/item/item_3.svg",
    mainImgSrc: "/assets/item/item_3.svg",
    svg: <Item_3 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  4: {
    id: 4,
    title: "Item_4",
    thumbImgSrc: "/assets/item/item_4.svg",
    mainImgSrc: "/assets/item/item_4.svg",
    svg: <Item_4 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  5: {
    id: 5,
    title: "Item_5",
    thumbImgSrc: "/assets/item/item_5.svg",
    mainImgSrc: "/assets/item/item_5.svg",
    svg: <Item_5 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  6: {
    id: 6,
    title: "Item_6",
    thumbImgSrc: "/assets/item/item_6.svg",
    mainImgSrc: "/assets/item/item_6.svg",
    svg: <Item_6 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  7: {
    id: 7,
    title: "Item_7",
    thumbImgSrc: "/assets/item/item_7.svg",
    mainImgSrc: "/assets/item/item_7.svg",
    svg: <Item_7 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  8: {
    id: 8,
    title: "Item_8",
    thumbImgSrc: "/assets/item/item_8.svg",
    mainImgSrc: "/assets/item/item_8.svg",
    svg: <Item_8 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  9: {
    id: 9,
    title: "Item_9",
    thumbImgSrc: "/assets/item/item_9.svg",
    mainImgSrc: "/assets/item/item_9.svg",
    svg: <Item_9 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  10: {
    id: 10,
    title: "Item_10",
    thumbImgSrc: "/assets/item/item_10.svg",
    mainImgSrc: "/assets/item/item_10.svg",
    svg: <Item_10 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  11: {
    id: 11,
    title: "Item_11",
    thumbImgSrc: "/assets/item/item_11.svg",
    mainImgSrc: "/assets/item/item_11.svg",
    svg: <Item_11 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  12: {
    id: 12,
    title: "Item_12",
    thumbImgSrc: "/assets/item/item_12.svg",
    mainImgSrc: "/assets/item/item_12.svg",
    svg: <Item_12 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  13: {
    id: 13,
    title: "Item_13",
    thumbImgSrc: "/assets/item/item_13.svg",
    mainImgSrc: "/assets/item/item_13.svg",
    svg: <Item_13 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  14: {
    id: 14,
    title: "Item_14",
    thumbImgSrc: "/assets/item/item_14.svg",
    mainImgSrc: "/assets/item/item_14.svg",
    svg: <Item_14 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  15: {
    id: 15,
    title: "Item_15",
    thumbImgSrc: "/assets/item/item_15.svg",
    mainImgSrc: "/assets/item/item_15.svg",
    svg: <Item_15 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  16: {
    id: 16,
    title: "Item_16",
    thumbImgSrc: "/assets/item/item_16.svg",
    mainImgSrc: "/assets/item/item_16.svg",
    svg: <Item_16 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  17: {
    id: 17,
    title: "Item_17",
    thumbImgSrc: "/assets/item/item_17.svg",
    mainImgSrc: "/assets/item/item_17.svg",
    svg: <Item_17 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  18: {
    id: 18,
    title: "Item_18",
    thumbImgSrc: "/assets/item/item_18.svg",
    mainImgSrc: "/assets/item/item_18.svg",
    svg: <Item_18 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  19: {
    id: 19,
    title: "Item_19",
    thumbImgSrc: "/assets/item/item_19.svg",
    mainImgSrc: "/assets/item/item_19.svg",
    svg: <Item_19 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  20: {
    id: 20,
    title: "Item_20",
    thumbImgSrc: "/assets/item/item_20.svg",
    mainImgSrc: "/assets/item/item_20.svg",
    svg: <Item_20 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  21: {
    id: 21,
    title: "Item_21",
    thumbImgSrc: "/assets/item/item_21.svg",
    mainImgSrc: "/assets/item/item_21.svg",
    svg: <Item_21 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  22: {
    id: 22,
    title: "Item_22",
    thumbImgSrc: "/assets/item/item_22.svg",
    mainImgSrc: "/assets/item/item_22.svg",
    svg: <Item_22 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  23: {
    id: 21,
    title: "Item_23",
    thumbImgSrc: "/assets/item/item_23.svg",
    mainImgSrc: "/assets/item/item_23.svg",
    svg: <Item_23 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  24: {
    id: 22,
    title: "Item_24",
    thumbImgSrc: "/assets/item/item_24.svg",
    mainImgSrc: "/assets/item/item_24.svg",
    svg: <Item_24 width="20" height="20" />,
    ...ITEM_SIZE,
  },
  25: {
    id: 25,
    title: "Item_25",
    thumbImgSrc: "/assets/item/item_25.svg",
    mainImgSrc: "/assets/item/item_25.svg",
    svg: <Item_25 width="20" height="20" />,
    ...ITEM_SIZE,
  },
}

export { BACKGROUND_COLOR, LAND_CHOICE, ITEM_CHOICE }
export type { ILandItem }
