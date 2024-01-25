import styled from "@emotion/styled"
import Image from "next/image"

interface ITriangle {
  width: number
  height: number
  alt: string
  type: "original" | "reversed"
}

const TriangleSrc = {
  original: "/assets/triangle/original.svg",
  reversed: "/assets/triangle/reversed.svg",
}

const Triangle = ({ width, height, alt, type }: ITriangle) => {
  return (
    <TraingleWrapper>
      <Image src={TriangleSrc[type]} width={width} height={height} alt={alt} />
    </TraingleWrapper>
  )
}

export default Triangle

const TraingleWrapper = styled.div`
  min-width: fit-content;
  min-height: fit-content;
`
