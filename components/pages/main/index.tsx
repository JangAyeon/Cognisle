import styled from "@emotion/styled"

import LogoutBtn from "@/components/LogoutBtn"
import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import Logo from "@/components/atoms/logo/Logo"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import MenuButtons from "@/components/molecules/menuButtons"

import useUserProfile from "@/hooks/useUser"

const Main = () => {
  const { userName } = useUserProfile()
  return (
    <BackgroundLayout
      imgSrc={"/assets/background/island.svg"}
      startColor="--gradient-yellow"
      endColor="--color-pink-01"
      degree="180deg"
      imgWidth={43}
    >
      <ContentWrapper>
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
