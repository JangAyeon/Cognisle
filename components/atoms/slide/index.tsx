import styled from "@emotion/styled"
import Image from "next/image"
import { useEffect } from "react"

import { ITEM_CHOICE } from "@/constants/island"

import { ItemIdProps } from "@/types/common/islandProps"

const Slide = ({ id }: { id: ItemIdProps }) => {
  useEffect(() => {
    console.log("slide item id", id)
  }, [])

  return (
    <SlideContainer>
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
