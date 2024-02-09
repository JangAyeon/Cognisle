import recordApi from "@/apis/recordApi"
import Modal from "@/components/modal/Modal"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import Image from "next/image"
import Triangle from "@/components/atoms/triangle/Triangle"
import { IRecordItem } from "@/types/recordItem"
import { GameResultModalProps } from "@/types/common/modalProps"
import { useRouter } from "next/router"
import Text from "@/components/atoms/typo/Text"

const GameResultModal = ({
  gameResult,
  isOpen,
  onClose,
}: GameResultModalProps) => {
  console.log("game result", gameResult)

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content width={30.0} height={48.0} pointColor={"--color-pink-01"}>
        <Modal.Body>
          <Container>
            <Image
              src="/assets/grey/circle.svg"
              height={180}
              width={180}
              alt="circle"
            />
            {gameResult.items.map((item) => (
              <div>{item.title}</div>
            ))}
            {gameResult.moves} 움직임
            {gameResult.time} 시간
          </Container>
        </Modal.Body>
      </Modal.Content>
      <Modal.CloseButton />
    </Modal.Root>
  )
}

export default GameResultModal

type Style = {
  color: string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
