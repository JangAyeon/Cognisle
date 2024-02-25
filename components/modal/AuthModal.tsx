import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"

import Text from "@/components/atoms/typo/Text"
import Modal from "@/components/modal/Modal"

import { ModalProps } from "@/types/common/modalProps"
import { Color } from "@/types/common/styleProps"

export type AuthModalProps = Pick<IAuthModal, "isOpen" | "state" | "text">

export interface IAuthModal extends ModalProps {
  text: string
  state: "fail" | "success"
}

const BACKGROUND_OVERLAY: { [key: string]: string } = {
  login: "rgba(115, 216, 156, 0.6)",
  signup: "rgba(145, 206, 237, 0.6)",
}
type StateProps = "fail" | "success"

type IStateImage = {
  [key in StateProps]: string
}

type IStateColor = {
  [key in StateProps]: {
    backgroundColor: Color
    textColor: Color
  }
}

const STATE_IMAGE: IStateImage = {
  fail: "/assets/yellow/warn.svg",
  success: "/assets/green/allow.svg",
}

const STATE_COLOR: IStateColor = {
  fail: {
    backgroundColor: "--color-orange-03",
    textColor: "--color-yellow-01",
  },
  success: {
    backgroundColor: "--color-yellow-01",
    textColor: "--color-green-04",
  },
}
const AuthModal = ({ text, isOpen, onClose, state }: IAuthModal) => {
  // console.log("game result", gameResult)

  const {
    query: { type },
  } = useRouter()
  return (
    <>
      {
        <Modal.Root
          isOpen={isOpen}
          onClose={onClose}
          backgroundColor={BACKGROUND_OVERLAY[type as string]}
        >
          <Modal.Content
            width={28}
            height={6.4}
            backgroundColor={STATE_COLOR[state].backgroundColor}
          >
            {/*<Modal.CloseButton size={14} imgSrc="/assets/grey/close.svg" />*/}
            <Container>
              <ImageWrapper>
                <Image
                  src={STATE_IMAGE[state]}
                  width={28}
                  height={21}
                  alt="public state Image"
                />
              </ImageWrapper>

              <TextWrapper>
                <Text
                  text={text}
                  size={1.4}
                  weight="bold"
                  color={STATE_COLOR[state].textColor}
                />
              </TextWrapper>
            </Container>
          </Modal.Content>
        </Modal.Root>
      }
    </>
  )
}

export default AuthModal

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`

const TextWrapper = styled.div`
  width: 100%;
`

const ImageWrapper = styled.div`
  padding: 0 2.4rem;
`
