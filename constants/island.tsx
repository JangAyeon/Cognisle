import dynamic from "next/dynamic"
import { ReactElement } from "react"

import {
  IIsland,
  ItemIdProps,
  TypeTitleProps,
} from "@/types/common/islandProps"
import { IBackgroundLayout } from "@/types/common/layoutProps"

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
  width: 20,
  height: 20,
}
const ITEM_CHOICE: ILandItemChoice = {
  0: {
    id: 0,
    title: "Item_0",
    thumbImgSrc: "@/public/assets/item/original/item_0.svg",
    mainImgSrc: "@/public/assets/item/original/item_0.svg",

    ...ITEM_SIZE,
  },
  1: {
    id: 1,
    title: "Item_1",
    thumbImgSrc: "@/public/assets/item/original/item_1.svg",
    mainImgSrc: "@/public/assets/item/original/item_1.svg",

    ...ITEM_SIZE,
  },
  2: {
    id: 2,
    title: "Item_2",
    thumbImgSrc: "@/public/assets/item/original/item_2.svg",
    mainImgSrc: "@/public/assets/item/original/item_2.svg",

    ...ITEM_SIZE,
  },
  3: {
    id: 3,
    title: "Item_3",
    thumbImgSrc: "@/public/assets/item/original/item_3.svg",
    mainImgSrc: "@/public/assets/item/original/item_3.svg",

    ...ITEM_SIZE,
  },
  4: {
    id: 4,
    title: "Item_4",
    thumbImgSrc: "@/public/assets/item/original/item_4.svg",
    mainImgSrc: "@/public/assets/item/original/item_4.svg",

    ...ITEM_SIZE,
  },
  5: {
    id: 5,
    title: "Item_5",
    thumbImgSrc: "@/publicassets/item/original/item_5.svg",
    mainImgSrc: "@/public/assets/item/original/item_5.svg",

    ...ITEM_SIZE,
  },
  6: {
    id: 6,
    title: "Item_6",
    thumbImgSrc: "/assets/item/original/item_6.svg",
    mainImgSrc: "/assets/item/original/item_6.svg",

    ...ITEM_SIZE,
  },
  7: {
    id: 7,
    title: "Item_7",
    thumbImgSrc: "@/public/assets/item/original/item_7.svg",
    mainImgSrc: "@/public/assets/item/original/item_7.svg",

    ...ITEM_SIZE,
  },
  8: {
    id: 8,
    title: "Item_8",
    thumbImgSrc: "@/public/assets/item/original/item_8.svg",
    mainImgSrc: "@/public/assets/item/original/item_8.svg",

    ...ITEM_SIZE,
  },
  9: {
    id: 9,
    title: "Item_9",
    thumbImgSrc: "@/public/assets/item/original/item_9.svg",
    mainImgSrc: "@/public/assets/item/original/item_9.svg",

    ...ITEM_SIZE,
  },
  10: {
    id: 10,
    title: "Item_10",
    thumbImgSrc: "@/public/assets/item/original/item_10.svg",
    mainImgSrc: "@/public/assets/item/original/item_10.svg",

    ...ITEM_SIZE,
  },
  11: {
    id: 11,
    title: "Item_11",
    thumbImgSrc: "@/public/assets/item/original/item_11.svg",
    mainImgSrc: "@/public/assets/item/original/item_11.svg",

    ...ITEM_SIZE,
  },
  12: {
    id: 12,
    title: "Item_12",
    thumbImgSrc: "@/public/assets/item/original/item_12.svg",
    mainImgSrc: "@/public/assets/item/original/item_12.svg",

    ...ITEM_SIZE,
  },
  13: {
    id: 13,
    title: "Item_13",
    thumbImgSrc: "@/public/assets/item/original/item_13.svg",
    mainImgSrc: "@/public/assets/item/original/item_13.svg",

    ...ITEM_SIZE,
  },
  14: {
    id: 14,
    title: "Item_14",
    thumbImgSrc: "@/public/assets/item/original/item_14.svg",
    mainImgSrc: "@/public/assets/item/original/item_14.svg",

    ...ITEM_SIZE,
  },
  15: {
    id: 15,
    title: "Item_15",
    thumbImgSrc: "@/public/assets/item/original/item_15.svg",
    mainImgSrc: "@/public/assets/item/original/item_15.svg",

    ...ITEM_SIZE,
  },
  16: {
    id: 16,
    title: "Item_16",
    thumbImgSrc: "@/public/assets/item/original/item_16.svg",
    mainImgSrc: "@/public/assets/item/original/item_16.svg",

    ...ITEM_SIZE,
  },
  17: {
    id: 17,
    title: "Item_17",
    thumbImgSrc: "@/public/assets/item/original/item_17.svg",
    mainImgSrc: "@/public/assets/item/original/item_17.svg",

    ...ITEM_SIZE,
  },
  18: {
    id: 18,
    title: "Item_18",
    thumbImgSrc: "@/public/assets/item/original/item_18.svg",
    mainImgSrc: "@/public/assets/item/original/item_18.svg",

    ...ITEM_SIZE,
  },
  19: {
    id: 19,
    title: "Item_19",
    thumbImgSrc: "@/public/assets/item/original/item_19.svg",
    mainImgSrc: "@/public/assets/item/original/item_19.svg",

    ...ITEM_SIZE,
  },
  20: {
    id: 20,
    title: "Item_20",
    thumbImgSrc: "@/public/assets/item/original/item_20.svg",
    mainImgSrc: "@/public/assets/item/original/item_20.svg",

    ...ITEM_SIZE,
  },
  21: {
    id: 21,
    title: "Item_21",
    thumbImgSrc: "@/public/assets/item/original/item_21.svg",
    mainImgSrc: "@/public/assets/item/original/item_21.svg",

    ...ITEM_SIZE,
  },
  22: {
    id: 22,
    title: "Item_22",
    thumbImgSrc: "@/public/assets/item/original/item_22.svg",
    mainImgSrc: "@/public/assets/item/original/item_22.svg",

    ...ITEM_SIZE,
  },
  23: {
    id: 21,
    title: "Item_23",
    thumbImgSrc: "@/public/assets/item/original/item_23.svg",
    mainImgSrc: "@/public/assets/item/original/item_23.svg",

    ...ITEM_SIZE,
  },
  24: {
    id: 22,
    title: "Item_24",
    thumbImgSrc: "@/public/assets/item/original/item_24.svg",
    mainImgSrc: "@/public/assets/item/original/item_24.svg",

    ...ITEM_SIZE,
  },
}

const ITEM_SVG = {
  0: dynamic(() => import("@/public/assets/item/original/item_0.svg")),
  1: dynamic(() => import("@/public/assets/item/original/item_1.svg")),
  2: dynamic(() => import("@/public/assets/item/original/item_2.svg")),
  3: dynamic(() => import("@/public/assets/item/original/item_3.svg")),
  4: dynamic(() => import("@/public/assets/item/original/item_4.svg")),
  5: dynamic(() => import("@/public/assets/item/original/item_5.svg")),

  6: dynamic(() => import("@/public/assets/item/original/item_6.svg")),
  7: dynamic(() => import("@/public/assets/item/original/item_7.svg")),
  8: dynamic(() => import("@/public/assets/item/original/item_8.svg")),
  9: dynamic(() => import("@/public/assets/item/original/item_9.svg")),

  10: dynamic(() => import("@/public/assets/item/original/item_10.svg")),
  11: dynamic(() => import("@/public/assets/item/original/item_11.svg")),

  12: dynamic(() => import("@/public/assets/item/original/item_12.svg")),
  13: dynamic(() => import("@/public/assets/item/original/item_13.svg")),
  14: dynamic(() => import("@/public/assets/item/original/item_14.svg")),
  15: dynamic(() => import("@/public/assets/item/original/item_15.svg")),

  16: dynamic(() => import("@/public/assets/item/original/item_16.svg")),
  17: dynamic(() => import("@/public/assets/item/original/item_17.svg")),
  18: dynamic(() => import("@/public/assets/item/original/item_18.svg")),
  19: dynamic(() => import("@/public/assets/item/original/item_19.svg")),

  20: dynamic(() => import("@/public/assets/item/original/item_20.svg")),
  21: dynamic(() => import("@/public/assets/item/original/item_21.svg")),

  22: dynamic(() => import("@/public/assets/item/original/item_22.svg")),
  23: dynamic(() => import("@/public/assets/item/original/item_23.svg")),
  24: dynamic(() => import("@/public/assets/item/original/item_24.svg")),
}

export { BACKGROUND_COLOR, LAND_CHOICE, ITEM_CHOICE, ITEM_SVG }
export type { ILandItem }
