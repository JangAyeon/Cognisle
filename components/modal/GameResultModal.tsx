import Modal from "@/components/modal/Modal"
import styled from "@emotion/styled"
import Text from "@/components/atoms/typo/Text"
import Image from "next/image"

import { GameResultModalProps } from "@/types/common/modalProps"
import useUserProfile from "@/hooks/useUser"

const GameResultModal = ({
  gameResult,
  isOpen,
  onClose,
}: GameResultModalProps) => {
  // console.log("game result", gameResult)
  const { userName } = useUserProfile()
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
              <Text
                text={userName}
                size={1.6}
                weight="bold"
                color={"--color-pink-01"}
              />
              <Text
                text={"게임 결과"}
                size={1.6}
                weight="bold"
                color={"--color-pink-01"}
              />
              <Image
                src="/assets/divider/pink.svg"
                height={3}
                width={180}
                alt="pink divider"
              />
              <ItemResultContianer>
                <ItemTitleWrapper>
                  <Image
                    src={"/assets/pink/card.svg"}
                    alt="game card"
                    height={35}
                    width={26}
                    style={{ marginRight: "1rem" }}
                  />
                  <Text
                    text={`획득한 아이템 종류`}
                    size={1.6}
                    weight="bold"
                    color={"--color-pink-01"}
                  />
                </ItemTitleWrapper>

                <ItemListContainer>
                  {gameResult.items.map((item) => (
                    <Text
                      text={item.title}
                      size={1.6}
                      weight="bold"
                      color={"--color-pink-01"}
                    />
                  ))}
                </ItemListContainer>
              </ItemResultContianer>
              <Image
                src="/assets/divider/pink.svg"
                height={3}
                width={180}
                alt="pink divider"
              />
              <Text
                text={`뒤집은 횟수 ${gameResult.moves}`}
                size={1.6}
                weight="bold"
                color={"--color-pink-01"}
              />{" "}
              <Text
                text={`플레이 시간 ${gameResult.time}`}
                size={1.6}
                weight="bold"
                color={"--color-pink-01"}
              />
            </Container>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}

export default GameResultModal

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
