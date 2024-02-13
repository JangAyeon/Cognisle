import { ILand } from "@/types/categoryTabs"
import { LandIdProps } from "@/types/common/islandProps"
import { IBackgroundLayout } from "@/types/common/layoutProps"

type islandBackgroundProps = Record<
  LandIdProps,
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

const LAND_CHOICE: ILand[] = [
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

export { BACKGROUND_COLOR, LAND_CHOICE }
