import { ICard, ICardData } from "@/types/common/gameProps"
import styled from "@emotion/styled"

interface IPlayBoard {
  computedBoardState: ICard[][]
  onCardClick: (
    _: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    data: ICardData
  ) => void
}

const PlayBoard = ({ computedBoardState, onCardClick }: IPlayBoard) => {
  return (
    <div>
      {computedBoardState.map((row, r) => (
        <Row key={r}>
          {row.map((card, c) => (
            <FlipCard
              key={c}
              state={card.state}
              onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
                onCardClick(e, { cardPosition: [r, c], ...card })
              }
            >
              {card.state === "hidden" ? null : card.value}
            </FlipCard>
          ))}
        </Row>
      ))}
    </div>
  )
}

export default PlayBoard

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.6rem;
`

const FlipCard = styled.span<{ state: ICard["state"] }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ state }) =>
    state === "hidden"
      ? "#31485a"
      : state === "selected"
      ? "orange"
      : "#bcceda"};
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  cursor: pointer;
  color: #f5f9fa;
  font-size: 2.8rem;
  font-weight: bold;
  border: none;

  &:hover {
    background-color: ${({ state }) =>
      state === "hidden"
        ? "#182c3a"
        : state === "selected"
        ? "orange"
        : "#bcceda"};
  }
`
