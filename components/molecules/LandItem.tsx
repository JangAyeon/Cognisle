import styled from "@emotion/styled"
import Image from "next/image"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"

import Slide from "@/components/atoms/slide"

import useSwiper from "@/hooks/useSwiper"

const LandItem = ({ list }: any) => {
  const { swiperSetting, currentSlide } = useSwiper()

  return (
    <SliderWrapper>
      <Swiper
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper: any) => console.log(swiper)}
      >
        {list.map((props: any, idx: number) => (
          <SwiperSlide key={props.id}>
            <Slide {...props} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderWrapper>
  )
}

export default LandItem

export const SliderWrapper = styled.div`
  background-color: white;
  width: 43rem;
`
