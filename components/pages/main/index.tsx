import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect } from "react"

import LogoutBtn from "@/components/LogoutBtn"
import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import Logo from "@/components/atoms/logo/Logo"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import AuthModal from "@/components/modal/AuthModal"
import MenuButtons from "@/components/molecules/MenuButtons"

import useAuth from "@/hooks/useAuth"
import useStateModal from "@/hooks/useStateModal"
import useUserProfile from "@/hooks/useUser"

const Main = () => {
  const { userName } = useUserProfile()
  const { isOpen, text, state, setStateModal } = useStateModal()

  return (
    <BackgroundLayout
      imgSrc={"/assets/background/island.svg"}
      startColor="--gradient-yellow"
      endColor="--color-pink-01"
      degree="180deg"
      imgWidth={43}
    >
      <ContentWrapper>
        {text && (
          <AuthModal
            state={state}
            text={text}
            isOpen={isOpen}
            onClose={() => setStateModal({ state, text, isOpen: false })}
          />
        )}
        <Logo type="main" width={240} height={124} alt="main logo" />
        <ButtonsWrapper>
          <BorderPointBtn
            width={20}
            height={4.8}
            pointHeight={50}
            pointWidth={20}
            textSize={1.6}
            mainColor="--color-pink-01"
            pointColor="--color-green-04"
            textColor="--color-yellow-01"
            text={userName}
            borderRadius={1.5}
          />
          <MenuButtons />{" "}
        </ButtonsWrapper>
      </ContentWrapper>

      <LogoutBtn />
    </BackgroundLayout>
  )
}

export default Main

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 11.8rem;
  gap: 7.2rem;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.4rem;
`
