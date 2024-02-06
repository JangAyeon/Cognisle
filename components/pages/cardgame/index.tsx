import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"
import useGame from "@/hooks/useGame"

const CardGameBoard = () => {
  const { computedBoardState, onCardClick, score, time, moves } = useGame()

  return (
    <>
      {computedBoardState && (
        <>
          <GameState score={score} time={time} moves={moves} />
          <PlayBoard
            computedBoardState={computedBoardState}
            onCardClick={onCardClick}
          />
        </>
      )}{" "}
    </>
  )
}

export default CardGameBoard
