import styled from "@emotion/styled"
import { useEffect } from "react"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import Slide from "@/components/atoms/slide"

import useSwiper from "@/hooks/useSwiper"

import { ItemIdProps } from "@/types/common/islandProps"

const LandItem = ({ list }: { list: ItemIdProps[] }) => {
  const { swiperSetting, currentSlide } = useSwiper()

  useEffect(() => {
    console.log("land item", list)
  }, [list])

  return (
    <SliderWrapper>
      <Swiper {...swiperSetting}>
        {list.map((id: ItemIdProps, idx: number) => (
          <SwiperSlide key={idx}>
            <Slide id={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
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
