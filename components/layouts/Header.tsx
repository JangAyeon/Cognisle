import Logo from "@/components/atoms/logo/Logo"
import Triangle from "@/components/atoms/triangle/Triangle"
import styled from "@emotion/styled"
import Link from "next/link"

const Header = () => {
  return (
    <HeaderWrapper>
      <Triangle type="original" width={139} height={72} alt="header triangle" />
      <Link href={"/"}>
        <Logo type="header" width={185} height={32} alt="header logo" />
      </Link>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.div`
  height: 7.2rem;
  background-color: var(--color-yellow-01);
  width: inherit;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  padding-right: 3.2rem;
  justify-content: space-between;
  align-items: center;
`
