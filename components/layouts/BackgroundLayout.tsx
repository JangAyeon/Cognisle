import styled from "@emotion/styled"
import { ReactNode } from "react"

interface IBackgroundLayout {
  height?: number
  width?: number
  imgSrc?: string
  startColor: string
  endColor: string
  imgWidth?: number
  imgHeight?: number
  degree: string
  children: ReactNode
}
const BackgroundLayout = ({
  height,
  width,
  imgSrc,
  startColor,
  endColor,
  imgWidth,
  imgHeight,
  degree,
  children,
}: IBackgroundLayout) => {
  return (
    <Wrapper
      imgSrc={imgSrc}
      startColor={startColor}
      endColor={endColor}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      degree={degree}
      height={height}
      width={width}
    >
      {children}
    </Wrapper>
  )
}

export default BackgroundLayout
type Style = Omit<IBackgroundLayout, "children">
const Wrapper = styled.div<Style>`
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  background: ${({ imgSrc, degree, startColor, endColor }) => `linear-gradient(
 ${degree},
      var(${startColor}),
      var(${endColor})
    ),
    url(${imgSrc})`};
  background-size: ${({ imgWidth }) => `${imgWidth}px auto`};
  background-blend-mode: overlay;
  background-position: left bottom;
  background-repeat: no-repeat;
`
