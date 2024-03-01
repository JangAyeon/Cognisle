import styled from "@emotion/styled"
import { fail } from "assert"
import Image from "next/image"

import AuthModal, { IAuthModal } from "@/components/modal/AuthModal"

import { ITEM_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useStateModal, { setStateModalProps } from "@/hooks/useStateModal"

import { ItemIdProps } from "@/types/common/islandProps"

import { setIslandItemLoc } from "@/utils/island"

interface ISlide {
  id: ItemIdProps
  setStateModal: setStateModalProps
}
const Slide = ({ id, setStateModal }: ISlide) => {
  const { islandItemLoc } = useIsland()

  const handleItemSelect = () => {
    // console.log(islandItemLoc[`loc_${id}`])
    // 아이템은 가지고 있지만 아직 섬에 위치시킨 적 없는 경우
    if (!islandItemLoc[`loc_${id}`]) {
      const data = { id, x: 200, y: 100, z: 1 }
      setIslandItemLoc({ ...islandItemLoc, [`loc_${id}`]: data })
    } else {
      setIslandItemLoc({ ...islandItemLoc, [`loc_${id}`]: null })
      setStateModal({
        isOpen: true,
        text: "선택한 아이템이 섬에서 제거됨",
        state: "fail",
      })
    }
  }

  // console.log("slide", id, ITEM_CHOICE[id].title)
  return (
    <>
      <SlideContainer onClick={() => handleItemSelect()}>
        <Image
          src={ITEM_CHOICE[id].thumbImgSrc}
          alt={ITEM_CHOICE[id].id.toString()}
          width={112}
          height={112}
        />
      </SlideContainer>
    </>
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
