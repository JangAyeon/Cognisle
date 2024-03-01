import styled from "@emotion/styled"
import { useRouter } from "next/router"

import Logo from "@/components/atoms/logo/Logo"
import Triangle from "@/components/atoms/triangle/Triangle"

const Header = () => {
  const router = useRouter()
  const route = () => {
    // console.log("router")
    router.replace("/")
  }

  return (
    <HeaderWrapper>
      <Triangle type="original" width={139} height={72} alt="header triangle" />
      <div onClick={route}>
        <Logo type="header" width={185} height={32} alt="header logo" />
      </div>
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
  z-index: 100;
`
