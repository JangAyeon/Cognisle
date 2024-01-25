import styled from "@emotion/styled"
import Image from "next/image"

interface ILogoSrc {
  width: number
  height: number
  alt: string
  type: "main" | "header"
}

const LogoSrc = {
  main: "/assets/logo/vertical.svg",
  header: "/assets/logo/horizontal.svg",
}
const Logo = ({ width, height, alt, type }: ILogoSrc) => {
  return (
    <>
      <LogoWrapper>
        <Image src={LogoSrc[type]} width={width} height={height} alt={alt} />
      </LogoWrapper>
    </>
  )
}

export default Logo

const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
`
