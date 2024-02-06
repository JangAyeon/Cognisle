import useUserProfile from "@/hooks/useUser"
import styled from "@emotion/styled"
import Image from "next/image"
import Text from "@/components/atoms/typo/Text"

const PublicStats = () => {
  const { userName } = useUserProfile()
  return (
    <PublicStatsWrapper>
      <Image
        src="/assets/yellow/friend.svg"
        width={61}
        height={130}
        alt="public state Image"
      />
      <TextWrapper>
        <Text
          size={24}
          weight="bold"
          color="--color-yellow-01"
          text={userName}
        />
      </TextWrapper>
    </PublicStatsWrapper>
  )
}

export default PublicStats

const PublicStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextWrapper = styled.div`
  padding-top: 1.7rem;
`
