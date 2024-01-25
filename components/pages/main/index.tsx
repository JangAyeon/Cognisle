import LogoutBtn from "@/components/LogoutBtn"
import BorderPointBtn from "@/components/atoms/button/BottomPointBtn"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import MenuButtons from "@/components/molecules/menuButtons"
import MainLogo from "@/public/assets/logo/mainLogo.svg"
import styled from "@emotion/styled"

const Main = () => {
  return (
    <BackgroundLayout
      imgSrc={"/assets/background/island.svg"}
      startColor="--gradient-yellow"
      endColor="--color-pink-01"
      degree="180deg"
      imgWidth={430}
      height={1100}
    >
      <ContentWrapper>
        <MainLogo />
        <ButtonsWrapper>
          <BorderPointBtn
            width={200}
            height={48}
            pointHeight={50}
            pointWidth={20}
            textSize={16}
            mainColor="--color-pink-01"
            pointColor="--color-green-04"
            textColor="--color-yellow-01"
            text="이름이름닉네임"
            borderRadius={15}
          />
          <MenuButtons />{" "}
        </ButtonsWrapper>
      </ContentWrapper>

      {/* <LogoutBtn />*/}
    </BackgroundLayout>
  )
}

export default Main

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 118px;
  gap: 72px;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`
