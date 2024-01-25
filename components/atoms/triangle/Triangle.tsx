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
    <Image src={TriangleSrc[type]} width={width} height={height} alt={alt} />
  )
}

export default Triangle
