import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"

const CardGame = () => {
  return (
    <>
      <PlayBoard
        computedBoardState={computedBoardState}
        onChipClick={onChipClick}
      />
      <GameState count={count} time={time} moves={moves} />
    </>
  )
}

export default CardGame
