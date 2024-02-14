import styled from "@emotion/styled"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import Slide from "@/components/atoms/slide"

import useSwiper from "@/hooks/useSwiper"

const LandItem = ({ list }: any) => {
  const { swiperSetting, currentSlide } = useSwiper()

  return (
    <SliderWrapper>
      <Swiper {...swiperSetting}>
        {list.map((props: any, idx: number) => (
          <SwiperSlide key={idx}>
            <Slide {...props} />
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
