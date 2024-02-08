import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"
import useGame from "@/hooks/useGame"
import styled from "@emotion/styled"

const CardGameBoard = () => {
  const { computedBoardState, onCardClick, score, time, moves, selectedCards } =
    useGame()

  return (
    <GameContainer>
      {computedBoardState && (
        <>
          <GameState score={score} time={time} moves={moves} />
          <PlayBoard
            computedBoardState={computedBoardState}
            onCardClick={onCardClick}
            score={score}
            selectedCards={selectedCards}
          />
        </>
      )}{" "}
    </GameContainer>
  )
}

export default CardGameBoard

const GameContainer = styled.div`
  margin-top: 7.2rem;
  padding: 0 3.2rem;
  padding-top: 6rem;
`
