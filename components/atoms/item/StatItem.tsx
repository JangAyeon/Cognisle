import styled from "@emotion/styled"
import Image from "next/image"
import { useState } from "react"

import Text from "@/components/atoms/typo/Text"
import ShowItemModal from "@/components/modal/ShowItemModal"

interface IItem {
  name: string
  status: boolean
  imgSrc: string
  content: number
  type: "item" | "dsUser"
}

const StatItem = ({ type, name, status, imgSrc, content }: IItem) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    // console.log("open")

    setIsModalOpen(true)
  }

  return (
    <>
      {isModalOpen && status && (
        <ShowItemModal
          type={type}
          itemId={content}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <StatItemWrapper onClick={handleModalOpen}>
        <Image src={imgSrc} height={102} width={102} alt={name} />
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
