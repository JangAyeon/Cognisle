import styled from "@emotion/styled"
import Image from "next/image"

import Modal from "@/components/modal/Modal"

import { ShowItemModalProps } from "@/types/common/modalProps"

const ShowItemModal = ({ itemId, isOpen, onClose }: ShowItemModalProps) => {
  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content width={30.0} height={48.0}>
        <Modal.CloseButton />
      </Modal.Content>
      <Container>
        <Image
          src={`/assets/modal/item_${itemId}.svg`}
          height={480}
          width={300}
          alt="circle"
        />
      </Container>
    </Modal.Root>
  )
}

export default ShowItemModal

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`
