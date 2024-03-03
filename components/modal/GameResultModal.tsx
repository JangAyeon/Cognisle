import styled from "@emotion/styled"
import Image from "next/image"

import Divider from "@/components/atoms/divider"
import Text from "@/components/atoms/typo/Text"
import Modal from "@/components/modal/Modal"

import useUserProfile from "@/hooks/useUser"

import { GameItemStateProps } from "@/types/common/gameProps"
import { GameResultModalProps } from "@/types/common/modalProps"

import { timeFormator } from "@/utils/timeFormat"

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
              <ResultTitleContainer>
                <Text
                  text={"게임 결과"}
                  size={3.6}
                  weight="bold"
                  color={"--color-pink-01"}
                />
                <Text
                  text={userName}
                  size={1.6}
                  weight="bold"
                  color={"--color-pink-01"}
                />
              </ResultTitleContainer>
              <Divider />

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
                  {gameResult.items.map((item: GameItemStateProps) => (
                    <>
                      <Text
                        text={item.title}
                        size={1.6}
                        weight=""
                        color={"--color-pink-01"}
                      />
                    </>
                  ))}
                </ItemListContainer>
              </ItemResultContianer>
              <Divider />
              <PlayResultContainer>
                <Text
                  text={`뒤집은 횟수 ${gameResult.moves}`}
                  size={1.6}
                  weight="bold"
                  color={"--color-pink-01"}
                />{" "}
                <Text
                  text={`플레이 시간 ${timeFormator(gameResult.time)}`}
                  size={1.6}
                  weight="bold"
                  color={"--color-pink-01"}
                />
              </PlayResultContainer>
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
  background-color: var(--color-yellow-01);
`

const ResultTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 1rem;
`
const ItemResultContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ItemListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4.6rem;
`

const PlayResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
