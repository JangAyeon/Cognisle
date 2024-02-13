import { LandIdProps } from "@/types/categoryTabs"
import { IBackgroundLayout } from "@/types/common/layoutProps"

type islandBackgroundProps = Record<
  LandIdProps,
  {
    startColor: IBackgroundLayout["startColor"]
    endColor: IBackgroundLayout["endColor"]
  }
>

const islandBackground: islandBackgroundProps = {
  0: { startColor: "--gradient-yellow", endColor: "--color-green-03" },
  1: { startColor: "--color-orange-03", endColor: "--color-pink-01" },
  2: { startColor: "--color-blue-03", endColor: "--color-blue-04" },
}

export default islandBackground
