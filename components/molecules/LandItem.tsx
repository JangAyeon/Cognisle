import styled from "@emotion/styled"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import Slide from "@/components/atoms/slide"

import useIsland from "@/hooks/useIsland"
import { setStateModalProps } from "@/hooks/useStateModal"
import useSwiper from "@/hooks/useSwiper"

import { ItemIdProps } from "@/types/common/islandProps"

interface ILandItem {
  setStateModal: setStateModalProps
}

const LandItem = ({ setStateModal }: ILandItem) => {
  const { islandItemExist } = useIsland()
  const { swiperSetting, currentSlide } = useSwiper()

  return (
    <>
      <SliderWrapper>
        <Swiper {...swiperSetting}>
          {islandItemExist.map((id: ItemIdProps, idx: number) => (
            <SwiperSlide key={idx}>
              <Slide id={id} setStateModal={setStateModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </>
  )
}

export default LandItem

export const SliderWrapper = styled.div`
  background-color: var(--color-yellow-01);
  height: 100%;
  display: flex;
  align-items: center;
  .swiper-wrapper {
    .swiper-slide {
      width: auto !important;
      margin-left: 2.7rem;
    }
  }
`
