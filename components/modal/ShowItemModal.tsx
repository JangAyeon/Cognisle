import styled from "@emotion/styled"
import Image from "next/image"

import Modal from "@/components/modal/Modal"

import useUserProfile from "@/hooks/useUser"

import { ShowItemModalProps } from "@/types/common/modalProps"

const ShowItemModal = ({
  type,
  itemId,

  isOpen,
  onClose,
}: ShowItemModalProps) => {
  const { userDsId } = useUserProfile()

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Content width={30.0} height={48.0}>
        <Modal.CloseButton />

        <Container>
          <Image
            src={
              type === "item"
                ? `/assets/modal_/item_${itemId}.png`
                : `/assets/dsUser/${userDsId}.svg`
            }
            height={480}
            width={300}
            alt="circle"
          />
        </Container>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ShowItemModal

const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`
