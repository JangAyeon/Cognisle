import Image from "next/image"

interface ITriangle {
  width: number
  height: number
  alt: string
  type: "header"
}

const TriangleSrc = {
  header: "/assets/triangle/header.svg",
}

const Triangle = ({ width, height, alt, type }: ITriangle) => {
  return (
    <Image src={TriangleSrc[type]} width={width} height={height} alt={alt} />
  )
}

export default Triangle
