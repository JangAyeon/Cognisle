import styled from "@emotion/styled"
import Image from "next/image"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"

import { Bounce } from "@/constants/animations"

const LandLoading = () => {
  return (
    <BackgroundLayout
      imgSrc={"/assets/background/bubble.png"}
      imgWidth={43}
      imgHeight={84.9}
      startColor="--gradient-yellow"
      endColor="--color-green-03"
      degree="180deg"
    >
      <IconWrapper>
        <Image
          src="/assets/loading/loading.svg"
          width="240"
          height="320"
          alt="loading"
        />
      </IconWrapper>
    </BackgroundLayout>
  )
}

export default LandLoading

const IconWrapper = styled.div`
  width: 24rem;

  position: relative;
  animation: ${Bounce} 2s infinite ease-in-out;
`
