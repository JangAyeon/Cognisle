import styled from "@emotion/styled"
import Image from "next/image"
import Link from "next/link"

import Text from "@/components/atoms/typo/Text"

interface IBorderPointBtn {
  width?: number
  height?: number
  mainColor: string
  pointColor?: string
  text: string
  textColor: string
  textSize: number
  pointWidth?: number
  pointHeight?: number
  borderRadius?: number
  link?: string
  imgSrc?: string
  imgHeight?: number
  imgWidth?: number
  onClick?: ((e: any) => void) | (() => void)
}

const BorderPointBtn = ({
  width,
  height,
  mainColor,
  pointColor,
  text,
  textColor,
  textSize,
  pointHeight,
  pointWidth,
  borderRadius,
  imgSrc,
  imgWidth,
  imgHeight,
  link,
  onClick,
}: IBorderPointBtn) => {
  return (
    <BtnWrapper
      width={width}
      height={height}
      mainColor={mainColor}
      borderRadius={borderRadius ?? 15}
    >
      <Link href={link ? link : {}}>
        <Point
          pointColor={pointColor ?? mainColor}
          width={width}
          height={height}
          pointHeight={pointHeight ?? 20}
          pointWidth={pointWidth ?? 20}
        />
        <ContentWrapper onClick={onClick}>
          {imgSrc && (
            <Image
              src={imgSrc}
              width={imgWidth}
              height={imgHeight}
              alt={text}
              priority
            />
          )}
          <Text size={textSize} weight="bold" color={textColor} text={text} />
        </ContentWrapper>
      </Link>
    </BtnWrapper>
  )
}

export default BorderPointBtn

type BtnWrapperStyle = Pick<
  IBorderPointBtn,
  "width" | "height" | "mainColor" | "borderRadius"
>
type PointStyle = Pick<
  IBorderPointBtn,
  "width" | "height" | "pointColor" | "pointHeight" | "pointWidth"
>

const BtnWrapper = styled.div<BtnWrapperStyle>`
  width: ${({ width }) => (width ? `${width}rem` : "auto")};
  height: ${({ height }) => (height ? `${height}rem` : "auto")};
  position: relative;
  background-color: ${({ mainColor }) => `var(${mainColor})`};
  border-radius: ${({ borderRadius }) => `${borderRadius}rem`};
`

const Point = styled.div<PointStyle>`
  width: ${({ width }) => (width ? `${width}rem` : "auto")};
  height: ${({ height }) => (height ? `${height}rem` : "auto")};
  background-color: ${({ pointColor }) => `var(${pointColor})`};
  clip-path: ${({ pointHeight, pointWidth }) =>
    `polygon(${pointWidth}% 0%, 0% 0%, 0% ${pointHeight}%);`};
`

const ContentWrapper = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1.2rem;
`
