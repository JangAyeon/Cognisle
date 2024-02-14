import { useState } from "react"
import Swiper from "swiper"
import { SwiperProps } from "swiper/react"

const useSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const swiperSetting: SwiperProps = {
    slidesPerView: 3,
    spaceBetween: 5,
    rewind: false,
    loop: false,
    scrollbar: { draggable: true },
    onSlideChange: (swiper: Swiper) => {
      console.log(swiper.realIndex)
      setCurrentSlide(swiper.realIndex)
    },
  }
  return { swiperSetting, currentSlide }
}

export default useSwiper
