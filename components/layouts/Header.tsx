import Triangle from "@/components/atoms/triangle/Triangle"
import HeaderLogo from "@/public/assets/logo/headerLogo.svg"
import styled from "@emotion/styled"
import Link from "next/link"

const Header = () => {
  return (
    <HeaderWrapper>
      <Triangle type="header" width={139} height={72} alt="header triangle" />
      <Link href={"/"}>
        <HeaderLogo height={32} width={185} />
      </Link>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  height: 72px;
  background-color: var(--color-yellow-01);
  display: flex;
  flex-direction: row;
  padding-right: 32px;
  justify-content: space-between;
  align-items: center;
`
