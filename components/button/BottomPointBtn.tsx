import styled from "@emotion/styled"
import Text from "@/components/typo/Text"
import Image from "next/image"
import Link from "next/link"
import { Color } from "@/types/common/styleProps"
interface IBorderPointBtn {
  width: number
  height: number
  mainColor: string
  pointColor: string
  text: string
  textColor: string
  textSize: number
  pointWidth: number
  pointHeight: number
  borderRadius: number
  link?: string
  imgSrc?: string
  imgHeight?: number
  imgWidth?: number
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
}: IBorderPointBtn) => {
  return (
    <Link href={link ? link : {}}>
      <BtnWrapper
        width={width}
        height={height}
        mainColor={mainColor}
        borderRadius={borderRadius}
      >
        <Point
          pointColor={pointColor}
          width={width}
          height={height}
          pointHeight={pointHeight}
          pointWidth={pointWidth}
        />
        <ContentWrapper>
          {imgSrc && (
            <Image
              src={imgSrc}
              alt={text}
              width={imgWidth}
              height={imgHeight}
            />
          )}
          <Text size={textSize} weight="bold" color={textColor} text={text} />
        </ContentWrapper>
      </BtnWrapper>
    </Link>
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
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  position: relative;
  background-color: ${({ mainColor }) => `var(${mainColor})`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
`

const Point = styled.div<PointStyle>`
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  background-color: ${({ pointColor }) => `var(${pointColor})`};
  clip-path: ${({ pointHeight, pointWidth }) =>
    `polygon(${pointWidth}% 0%, 0% 0%, 0% ${pointHeight}%);`};
`

const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 12px;
`