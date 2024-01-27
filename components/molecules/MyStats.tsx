import BorderPointBtn from "@/components/atoms/button/BottomPointBtn"
import useUserProfile from "@/hooks/useUser"
import styled from "@emotion/styled"
import Text from "@/components/typo/Text"

const MyStats = () => {
  const { userName } = useUserProfile()
  return (
    <MyStatsWrapper>
      <BorderPointBtn
        width={120}
        height={120}
        pointHeight={20}
        pointWidth={20}
        mainColor="--color-yellow-01"
        pointColor="--color-blue-01"
        borderRadius={16}
        text={"미정미정미정"}
        textColor="--color-blue-02"
        textSize={15}
      />
      <TextWrapper>
        <Text
          size={24}
          weight="bold"
          color="--color-yellow-01"
          text={userName}
        />
      </TextWrapper>
    </MyStatsWrapper>
  )
}

const MyStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextWrapper = styled.div`
  padding-top: 17px;
`

export default MyStats
