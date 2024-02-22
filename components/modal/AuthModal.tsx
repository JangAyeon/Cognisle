import styled from "@emotion/styled"

import Text from "@/components/atoms/typo/Text"
import Modal from "@/components/modal/Modal"

import { ModalProps } from "@/types/common/modalProps"

const AuthModal = ({ isOpen, onClose }: ModalProps) => {
  // console.log("game result", gameResult)
  return (
    <>
      <Modal.Root
        isOpen={isOpen}
        onClose={onClose}
        backgroundColor="rgba(115, 216, 156, 0.6)"
      >
        <Modal.Content
          width={28}
          height={6.4}
          pointColor={"--color-orange-03"}
          backgroundColor={"--color-orange-03"}
        >
          <Modal.CloseButton />
          <Container>
            <Text
              text="아이디 또는 비밀번호가 올바르지 않습니다."
              size={1.4}
              weight="bold"
              color={"--color-yellow-01"}
            />
          </Container>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}

export default AuthModal

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 14.8rem;
`

const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const ItemResultContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ItemListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    margin: 0 0.5rem;
  }
`
