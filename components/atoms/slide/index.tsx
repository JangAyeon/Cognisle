import styled from "@emotion/styled"
import Image from "next/image"

const Slide = ({ title, thumbImgSrc }: any) => {
  console.log(title, thumbImgSrc)

  return (
    <SlideContainer>
      <Image src={thumbImgSrc} alt={title} width={112} height={112} />
    </SlideContainer>
  )
}

export default Slide

export const SlideContainer = styled.div`
  position: relative;
  width: 11.2rem;
  height: 11.2rem;
  background-color: pink;
`
