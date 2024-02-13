import { useState } from "react"
import Swiper from "swiper"
import { SwiperProps } from "swiper/react"

const useSwiper = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const swiperSetting: SwiperProps = {
    slidesPerView: 3,
    loop: false,
    onSlideChange: (swiper: Swiper) => setCurrentSlide(swiper.realIndex),
  }
  return { swiperSetting, currentSlide }
}

export default useSwiper
