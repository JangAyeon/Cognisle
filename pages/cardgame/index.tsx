import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"

const CardGame = () => {
  return (
    <>
      <PlayBoard
        computedBoardState={computedBoardState}
        onChipClick={onChipClick}
      />
      <GameState items={items} time={time} moves={moves} />
    </>
  )
}

export default CardGame
