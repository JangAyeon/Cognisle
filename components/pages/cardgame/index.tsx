import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"
import useGame from "@/hooks/useGame"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"
import Image from "next/image"
import recordApi from "@/apis/recordApi"

const CardGameBoard = () => {
  const { computedBoardState, onCardClick, score, time, moves, cards } =
    useGame()
  const [isEndLoading, setIsEndLoading] = useState(false)
  const [gameResult, setGameResult] = useState()

  const getItems = async (idArray: number[]) => {
    const { data, error } = await recordApi.getItemsByIdArray(idArray)
    console.log(data)
  }
  useEffect(() => {
    if (score === 8) {
      console.log("획득한 카드", cards)
      getItems(cards)
      setIsEndLoading(true)
    }
  }, [score])
  return (
    <GameContainer>
      {isEndLoading && (
        <>
          <GameEndWrapper>
            <Image
              src="/assets/green/friend.svg"
              width={292}
              height={300}
              alt="state Dot Line Divider"
              style={{ opacity: 1 }}
            />
          </GameEndWrapper>
        </>
      )}
      {computedBoardState && (
        <>
          <GameState score={score} time={time} moves={moves} />
          <PlayBoard
            computedBoardState={computedBoardState}
            onCardClick={onCardClick}
            score={score}
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

const GameEndWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 43rem;
  height: 100%;
  background-color: rgba(254, 195, 97, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`
