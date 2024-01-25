import LogoutBtn from "@/components/LogoutBtn"
import BorderPointBtn from "@/components/atoms/button/BottomPointBtn"
import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import MenuButtons from "@/components/molecules/menuButtons"

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
      <MenuButtons />

      <LogoutBtn />
    </BackgroundLayout>
  )
}

export default Main
