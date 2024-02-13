import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Triangle from "@/components/atoms/triangle/Triangle"
import Text from "@/components/atoms/typo/Text"
import Modal from "@/components/modal/Modal"

import recordApi from "@/apis/recordApi"

import { ShowItemModalProps } from "@/types/common/modalProps"
import { IRecordItem } from "@/types/recordItem"

const ShowItemModal = ({ itemId, isOpen, onClose }: ShowItemModalProps) => {
  // const [loading, setLoading] = useState<boolean>(true)

  const { route } = useRouter()
  const mainColor =
    route === "/collection" ? "--color-blue-02" : "--color-orange-03"
  const pointColor =
    route === "/collection" ? "--color-orange-01" : "--color-orange-03"
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
            <Text
              size={2.8}
              color={mainColor}
              weight="bold"
              text={data.title}
            />

            <Image
              src="/assets/divider/yellow.svg"
              width={84}
              height={21}
              alt="state Dot Line Divider"
            />
            <SubjectWrapper>
              <Triangle type="leftRed" alt="leftRed" width={57} height={28} />
              <span>
                <Text
                  size={2}
                  color={mainColor}
                  weight="bold"
                  text={data.subject}
                />
              </span>
              <Triangle type="rightRed" alt="rightRed" width={57} height={28} />
            </SubjectWrapper>

            <DescriptionWrapper>
              <Text
                size={1.4}
                color={mainColor}
                weight="normal"
                text={data.description}
              />
            </DescriptionWrapper>

            <TimeWrapper color={mainColor}>
              <Text
                size={1.4}
                color="--color-yellow-02"
                weight="normal"
                text={data.time}
              />
            </TimeWrapper>
          </Container>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ShowItemModal

type Style = {
  color: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubjectWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    padding: 0 2.6rem;
  }
`

const DescriptionWrapper = styled.div`
  width: 15rem;
  height: auto;
  text-align: center;
`

const TimeWrapper = styled.div<Style>`
  padding: 0.5rem 1.5rem;
  border-radius: 1.6rem;
  background-color: ${({ color }) => `var(${color})`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
