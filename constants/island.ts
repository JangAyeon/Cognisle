import { IIsland } from "@/types/common/islandProps"
import { IBackgroundLayout } from "@/types/common/layoutProps"

type islandBackgroundProps = Record<
  IIsland["landType"],
  {
    startColor: IBackgroundLayout["startColor"]
    endColor: IBackgroundLayout["endColor"]
  }
>

const BACKGROUND_COLOR: islandBackgroundProps = {
  0: { startColor: "--gradient-yellow", endColor: "--color-green-03" },
  1: { startColor: "--color-orange-03", endColor: "--color-pink-01" },
  2: { startColor: "--color-blue-03", endColor: "--color-blue-04" },
}

const LAND_CHOICE: any = [
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

const ITEM_CHOICE: any = [
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
  {
    id: 3,
    title: "morning",
    thumbImgSrc: "/assets/control/background/morning.png",
    mainImgSrc: "/assets/control/land/morning.png",
  },
  {
    id: 4,
    title: "evening",
    thumbImgSrc: "/assets/control/background/evening.png",
    mainImgSrc: "/assets/control/land/evening.png",
  },
  {
    id: 5,
    title: "night",
    thumbImgSrc: "/assets/control/background/night.png",
    mainImgSrc: "/assets/control/land/night.png",
  },
  {
    id: 6,
    title: "morning",
    thumbImgSrc: "/assets/control/background/morning.png",
    mainImgSrc: "/assets/control/land/morning.png",
  },
  {
    id: 7,
    title: "evening",
    thumbImgSrc: "/assets/control/background/evening.png",
    mainImgSrc: "/assets/control/land/evening.png",
  },
  {
    id: 8,
    title: "night",
    thumbImgSrc: "/assets/control/background/night.png",
    mainImgSrc: "/assets/control/land/night.png",
  },
]

export { BACKGROUND_COLOR, LAND_CHOICE, ITEM_CHOICE }
