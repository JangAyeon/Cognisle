import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"

const WaitGameStart = () => {
  return (
    <BorderPointBtn
      width={23.3}
      height={10.7}
      pointWidth={20}
      pointHeight={50}
      mainColor={"--color-yellow-01"}
      pointColor={"--color-orange-03"}
      textColor={"--color-orange-03"}
      text="게임 시작"
      textSize={3.6}
      borderRadius={1.6}
    />
  )
}
export default WaitGameStart
