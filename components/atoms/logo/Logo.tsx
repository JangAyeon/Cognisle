import styled from "@emotion/styled"
import Image from "next/image"

interface ILogo {
  width: number
  height: number
  alt: string
  type: "main" | "header"
  padding?: number
}

const LogoSrc = {
  main: "/assets/logo/vertical.svg",
  header: "/assets/logo/horizontal.svg",
}
const Logo = ({ width, height, alt, type, padding }: ILogo) => {
  return (
    <>
      <LogoWrapper padding={padding}>
        <Image
          src={LogoSrc[type]}
          width={width}
          height={height}
          alt={alt}
          priority
        />
      </LogoWrapper>
    </>
  )
}

export default Logo

type LogoWrapperStyle = Pick<ILogo, "padding">
const LogoWrapper = styled.div<LogoWrapperStyle>`
  width: fit-content;
  height: fit-content;
  padding-top: ${({ padding }) => (padding ? `${padding}rem` : "0")};
`
