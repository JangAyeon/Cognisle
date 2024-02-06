import GameCard from "@/components/atoms/card/GameCard"
import { ICard, ICardData } from "@/types/common/gameProps"
import styled from "@emotion/styled"
import { useEffect } from "react"

interface IPlayBoard {
  computedBoardState: ICard[][]
  onCardClick: (
    _: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    data: ICardData
  ) => void
}

const PlayBoard = ({ computedBoardState, onCardClick }: IPlayBoard) => {
  useEffect(() => {
    console.log("게임 개발 중 확인용 콘솔", computedBoardState)
  }, [])
  return (
    <BoardWrapper>
      {computedBoardState.map((row, r) => (
        <>
          {row.map((card, c) => (
            <FlipCard
              key={c}
              state={card.state}
              onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                onCardClick(e, { cardPosition: [r, c], ...card })
              }
            >
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
