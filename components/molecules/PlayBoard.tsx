import { Card, CardData } from "@/hooks/useGame"

interface IPlayBoard {
  computedBoardState: Card[][] | undefined
  onCardClick: (
    _: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    data: CardData
  ) => void
}

const PlayBoard = ({ computedBoardState, onCardClick }: IPlayBoard) => {
  console.log(computedBoardState)
  return <div>playBaord</div>
}

export default PlayBoard
