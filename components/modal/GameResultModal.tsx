import Modal from "@/components/modal/Modal"
import styled from "@emotion/styled"

import Image from "next/image"

import { GameResultModalProps } from "@/types/common/modalProps"

const GameResultModal = ({
  gameResult,
  isOpen,
  onClose,
}: GameResultModalProps) => {
  console.log("game result", gameResult)

  return (
    <>
      <Modal.Root isOpen={isOpen} onClose={onClose}>
        <Modal.Content
          width={30.0}
          height={48.0}
          pointColor={"--color-pink-01"}
        >
          <Modal.CloseButton />
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
      </Modal.Root>
    </>
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
