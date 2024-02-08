import styled from "@emotion/styled"
import Image from "next/image"
import Text from "@/components/atoms/typo/Text"
import { useState } from "react"
import ShowItemModal from "@/components/atoms/modal/ShowItemModal"
interface IItem {
  name: string
  status: boolean
  imgSrc: string
}

const StatItem = ({ name, status, imgSrc }: IItem) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    // console.log("open")

    setIsModalOpen(true)
  }

  return (
    <>
      {isModalOpen && (
        <ShowItemModal
          itemId={name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <StatItemWrapper onClick={handleModalOpen}>
        <Image src={imgSrc} height={102} width={102} alt={name} />
        <Text
          text={name}
          size={1.6}
          weight="bold"
          color={status ? "--color-orange-01" : "--color-grey-01"}
        />
      </StatItemWrapper>
    </>
  )
}

export default StatItem

const StatItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
`
