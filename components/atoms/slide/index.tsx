import styled from "@emotion/styled"
import Image from "next/image"

import { ITEM_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

import { ItemIdProps } from "@/types/common/islandProps"

import { setIslandItemLoc } from "@/utils/island"

const Slide = ({ id }: { id: ItemIdProps }) => {
  const { islandItemLoc } = useIsland()
  const handleItemSelect = () => {
    console.log(islandItemLoc[`loc_${id}`])
    if (!islandItemLoc[`loc_${id}`]) {
      const data = { id, x: 200, y: 100, z: 1 }
      setIslandItemLoc({ ...islandItemLoc, [`loc_${id}`]: data })
    }
  }

  // console.log("slide", id, ITEM_CHOICE[id].title)
  return (
    <SlideContainer onClick={() => handleItemSelect()}>
      <Image
        src={ITEM_CHOICE[id].thumbImgSrc}
        alt={ITEM_CHOICE[id].id.toString()}
        width={ITEM_CHOICE[id].width}
        height={ITEM_CHOICE[id].height}
      />
    </SlideContainer>
  )
}

export default Slide

export const SlideContainer = styled.div`
  position: relative;
  display: flex;
  width: 11.2rem;
  height: 11.2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
