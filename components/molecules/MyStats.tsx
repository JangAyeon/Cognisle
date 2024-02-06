import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"
import useUserProfile from "@/hooks/useUser"
import styled from "@emotion/styled"
import Text from "@/components/atoms/typo/Text"

const MyStats = () => {
  const { userName } = useUserProfile()
  return (
    <MyStatsWrapper>
      <BorderPointBtn
        width={12}
        height={12}
        pointHeight={20}
        pointWidth={20}
        mainColor="--color-yellow-01"
        pointColor="--color-blue-01"
        borderRadius={1.6}
        text={"미정미정미정"}
        textColor="--color-blue-02"
        textSize={1.5}
      />
      <TextWrapper>
        <Text
          size={2.4}
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
  padding-top: 1.7rem;
`

export default MyStats
