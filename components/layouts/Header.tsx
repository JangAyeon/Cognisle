import HeaderLogo from "@/public/assets/logo/headerLogo.svg"
import Triangle from "@/public/assets/triangle/header.svg"
import styled from "@emotion/styled"

const Header = () => {
  return (
    <HeaderWrapper>
      <Triangle />
      <HeaderLogo height={32} width={185} />
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
