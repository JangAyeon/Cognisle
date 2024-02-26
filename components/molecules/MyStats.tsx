import styled from "@emotion/styled"

import StatItem from "@/components/atoms/item/StatItem"
import Text from "@/components/atoms/typo/Text"

import useUserProfile from "@/hooks/useUser"

const MyStats = () => {
  const { userName } = useUserProfile()
  return (
    <MyStatsWrapper>
      <StatItem
        name="아이템 이름"
        imgSrc={`/assets/item/active/item_0.svg`}
        status={true}
        content={0}
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
