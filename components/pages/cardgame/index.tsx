import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"
import useGame from "@/hooks/useGame"

const CardGameBoard = () => {
  const {
    computedBoardState,
    onCardClick,
    score,
    time,
    setTime,
    moves,
    setMoves,
  } = useGame()
  return (
    <>
      {computedBoardState && (
        <PlayBoard
          computedBoardState={computedBoardState}
          onCardClick={onCardClick}
        />
      )}{" "}
      <GameState /*score={score} time={time} moves={moves}*/ />
    </>
  )
}

export default CardGameBoard
