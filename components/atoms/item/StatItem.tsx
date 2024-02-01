import styled from "@emotion/styled"
import Image from "next/image"
import Text from "@/components/atoms/typo/Text"
interface IItem {
  name: string
  status: boolean
  imgSrc: string
}

const StatItem = ({ name, status, imgSrc }: IItem) => {
  return (
    <StatItemWrapper>
      <Image src={imgSrc} height={102} width={102} alt={name} />
      <Text
        text={name}
        size={16}
        weight="bold"
        color={status ? "--color-orange-01" : "--color-grey-01"}
      />
    </StatItemWrapper>
  )
}

export default StatItem

const StatItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`
