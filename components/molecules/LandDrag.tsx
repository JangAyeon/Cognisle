import Image from "next/image"

import { LAND_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

const LandContent = () => {
  const { islandType } = useIsland()
  return (
    <Image
      src={LAND_CHOICE[islandType].mainImgSrc}
      alt={LAND_CHOICE[islandType].title}
      width={430}
      height={430}
    />
  )
}

export default LandContent
