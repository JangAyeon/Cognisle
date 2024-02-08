import GameCard from "@/components/atoms/card/GameCard"
import ShowItemModal from "@/components/atoms/modal/ShowItemModal"
import { ICard, ICardData, IGameInfo } from "@/types/common/gameProps"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

interface IPlayBoard {
  computedBoardState: ICard[][]
  onCardClick: (
    _: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    data: ICardData,
    handleModalOpen: any
  ) => void
  score: IGameInfo["score"]
  selectedCards: ICardData[]
}

const PlayBoard = ({
  computedBoardState,
  onCardClick,
  score,
  selectedCards,
}: IPlayBoard) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalId, setModalId] = useState(-1)

  const handleModalOpen = (id: number) => {
    // console.log("open")
    setModalId(id)
    setIsModalOpen(true)
  }
  useEffect(() => {
    console.log("게임 개발 중 확인용 콘솔", computedBoardState)
  }, [])

  return (
    <BoardWrapper>
      {isModalOpen && (
        <ShowItemModal
          itemId={modalId}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      {computedBoardState.map((row, r) => (
        <>
          {row.map((card, c) => (
            <FlipCard
              key={c}
              state={card.state}
              onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                onCardClick(
                  e,
                  { cardPosition: [r, c], ...card },
                  handleModalOpen
                )
              }
            >
              {" "}
              <GameCard key={c} state={card.state} value={card.value} />
            </FlipCard>
          ))}
        </>
      ))}
    </BoardWrapper>
  )
}

export default PlayBoard

const BoardWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem 1.2rem;
`

const FlipCard = styled.div<{ state: ICard["state"] }>`
  cursor: pointer;
`
