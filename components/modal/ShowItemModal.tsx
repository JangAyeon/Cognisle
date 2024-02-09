import recordApi from "@/apis/recordApi"
import Modal from "@/components/modal/Modal"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import Image from "next/image"
import Triangle from "@/components/atoms/triangle/Triangle"
import { IRecordItem } from "@/types/recordItem"
import { ShowItemModalProps } from "@/types/common/modalProps"

const ShowItemModal = ({
  itemId,
  isOpen,
  onClose,
  pointColor,
}: ShowItemModalProps) => {
  // const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<IRecordItem>({
    title: "",
    id: 0,
    description: "",
    subject: "",
    time: "",
  })

  const getItem = async () => {
    const { data, error } = await recordApi.getItemById(itemId)
    setData(data)
  }

  useEffect(() => {
    getItem()
  }, [])

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content width={30.0} height={48.0} pointColor={pointColor}>
        <Modal.CloseButton />
        <Modal.Body>
          <Container>
            <Image
              src="/assets/grey/circle.svg"
              height={180}
              width={180}
              alt="circle"
            />
            {data.title}
            <Image
              src="/assets/yellow/dotLine.svg"
              width={84}
              height={21}
              alt="state Dot Line Divider"
            />
            <div>
              <Triangle type="leftRed" alt="leftRed" width={57} height={28} />
              {data.subject}
              <Triangle type="rightRed" alt="rightRed" width={57} height={28} />
            </div>
            <div>{data.description}</div>
            <div>{data.time}</div>
          </Container>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ShowItemModal

const Container = styled.div`
  background-color: var(--color-pink-01);
`
