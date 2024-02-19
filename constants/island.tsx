import { ReactElement } from "react"

import {
  IIsland,
  ItemIdProps,
  TypeTitleProps,
} from "@/types/common/islandProps"
import { IBackgroundLayout } from "@/types/common/layoutProps"

import Pen from "@/public/assets/items/Pen.svg"
import AlphaE from "@/public/assets/items/alphaE.svg"
import CleanDay from "@/public/assets/items/cleanDay.svg"
import CleanNight from "@/public/assets/items/cleanNight.svg"
import Cloudy from "@/public/assets/items/cloudy.svg"
import CloudyDay from "@/public/assets/items/cloudyDay.svg"
import CloudyNight from "@/public/assets/items/cloudyNight.svg"
import Dark from "@/public/assets/items/dark.svg"
import EwhaDiary from "@/public/assets/items/ewhaDiary.svg"
import HeavyRain from "@/public/assets/items/heavyRain.svg"
import Rain from "@/public/assets/items/rain.svg"
import RainSnow from "@/public/assets/items/rainSnow.svg"
import Snow from "@/public/assets/items/snow.svg"

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
    title: "cleanDay",
    thumbImgSrc: "/assets/items/cleanDay.svg",
    mainImgSrc: "/assets/items/cleanDay.svg",
    svg: <AlphaE width="20" height="20" />,
    ...ITEM_SIZE,
  },
  1: {
    id: 1,
    title: "cleanDay",
    thumbImgSrc: "/assets/items/cleanDay.svg",
    mainImgSrc: "/assets/items/cleanDay.svg",
    svg: <CleanNight />,
    ...ITEM_SIZE,
  },
  2: {
    id: 2,
    title: "cleanNight",
    thumbImgSrc: "/assets/items/cleanNight.svg",
    mainImgSrc: "/assets/items/cleanNight.svg",
    svg: <EwhaDiary width="60" height="60" />,
    ...ITEM_SIZE,
  },
  3: {
    id: 3,
    title: "cloudy",
    thumbImgSrc: "/assets/items/cloudy.svg",
    mainImgSrc: "/assets/items/cloudy.svg",
    svg: <CloudyDay />,
    ...ITEM_SIZE,
  },
  4: {
    id: 4,
    title: "cloudyDay",
    thumbImgSrc: "/assets/items/cloudyDay.svg",
    mainImgSrc: "/assets/items/cloudyDay.svg",
    svg: <AlphaE width="60" height="60" />,
    ...ITEM_SIZE,
  },
  5: {
    id: 5,
    title: "cloudyNigth",
    thumbImgSrc: "/assets/items/cloudyNight.svg",
    mainImgSrc: "/assets/items/cloudyNight.svg",
    svg: <Dark />,
    ...ITEM_SIZE,
  },
  6: {
    id: 6,
    title: "dark",
    thumbImgSrc: "/assets/items/dark.svg",
    mainImgSrc: "/assets/items/dark.svg",
    svg: <HeavyRain />,
    ...ITEM_SIZE,
  },
  7: {
    id: 7,
    title: "heavyRain",
    thumbImgSrc: "/assets/items/heavyRain.svg",
    mainImgSrc: "/assets/items/heavyRain.svg",
    svg: <Rain />,
    ...ITEM_SIZE,
  },
  8: {
    id: 8,
    title: "rain",
    thumbImgSrc: "/assets/items/rain.svg",
    mainImgSrc: "/assets/items/rain.svg",
    svg: <RainSnow />,
    ...ITEM_SIZE,
  },
  9: {
    id: 9,
    title: "rainSnow",
    thumbImgSrc: "/assets/items/rainSnow.svg",
    mainImgSrc: "/assets/items/rainSnow.svg",
    svg: <Snow />,
    ...ITEM_SIZE,
  },
  10: {
    id: 10,
    title: "snow",
    thumbImgSrc: "/assets/items/snow.svg",
    mainImgSrc: "/assets/items/snow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  11: {
    id: 11,
    title: "cleanDay",
    thumbImgSrc: "/assets/items/cleanDay.svg",
    mainImgSrc: "/assets/items/cleanDay.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  12: {
    id: 12,
    title: "cleanNight",
    thumbImgSrc: "/assets/items/cleanNight.svg",
    mainImgSrc: "/assets/items/cleanNight.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  13: {
    id: 13,
    title: "cloudy",
    thumbImgSrc: "/assets/items/cloudy.svg",
    mainImgSrc: "/assets/items/cloudy.svg",

    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  14: {
    id: 14,
    title: "cloudyDay",
    thumbImgSrc: "/assets/items/cloudyDay.svg",
    mainImgSrc: "/assets/items/cloudyDay.svg",
    svg: <Cloudy />,
    ...ITEM_SIZE,
  },
  15: {
    id: 15,
    title: "cloudyNigth",
    thumbImgSrc: "/assets/items/cloudyNight.svg",
    mainImgSrc: "/assets/items/cloudyNight.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  16: {
    id: 16,
    title: "dark",
    thumbImgSrc: "/assets/items/dark.svg",
    mainImgSrc: "/assets/items/dark.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  17: {
    id: 17,
    title: "heavyRain",
    thumbImgSrc: "/assets/items/heavyRain.svg",
    mainImgSrc: "/assets/items/heavyRain.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  18: {
    id: 18,
    title: "rain",
    thumbImgSrc: "/assets/items/rain.svg",
    mainImgSrc: "/assets/items/rain.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  19: {
    id: 19,
    title: "rainSnow",
    thumbImgSrc: "/assets/items/rainSnow.svg",
    mainImgSrc: "/assets/items/rainSnow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  20: {
    id: 20,
    title: "snow",
    thumbImgSrc: "/assets/items/snow.svg",
    mainImgSrc: "/assets/items/snow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  21: {
    id: 21,
    title: "snow",
    thumbImgSrc: "/assets/items/snow.svg",
    mainImgSrc: "/assets/items/snow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  22: {
    id: 22,
    title: "snow",
    thumbImgSrc: "/assets/items/snow.svg",
    mainImgSrc: "/assets/items/snow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  23: {
    id: 21,
    title: "snow",
    thumbImgSrc: "/assets/items/snow.svg",
    mainImgSrc: "/assets/items/snow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
  24: {
    id: 22,
    title: "snow",
    thumbImgSrc: "/assets/items/snow.svg",
    mainImgSrc: "/assets/items/snow.svg",
    svg: <CleanDay />,
    ...ITEM_SIZE,
  },
}

export { BACKGROUND_COLOR, LAND_CHOICE, ITEM_CHOICE }
export type { ILandItem }
