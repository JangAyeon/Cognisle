import styled from "@emotion/styled"
import { useEffect, useState } from "react"

import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"

import useGame from "@/hooks/useGame"
import useUserProfile from "@/hooks/useUser"

import recordApi from "@/apis/recordApi"

import { GameLoadingProps, IGameResult } from "@/types/common/gameProps"

import Loading from "./loading"

const CardGameBoard = () => {
  const { userEmail, userSbId } = useUserProfile()
  const { computedBoardState, onCardClick, score, time, moves, cards } =
    useGame()
  const [isLoading, setIsLoading] = useState(true)
  const [gameResult, setGameResult] = useState<IGameResult>({
    moves: 0,
    items: [],
    time: 0,
  })

  const getItems = async (idArray: number[]) => {
    const { data, error } = await recordApi.getItemsByIdArray(idArray)
    // await new Promise((resolve) => setTimeout(resolve, 3000))

    if (data?.length) {
      setGameResult({ moves, time, items: data })
    }
  }

  const wait = async (type: GameLoadingProps) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (type === "end") {
      getItems(cards)
      //tempget()
      // postGameResult(cards)
    } else {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (score === 0) {
      // console.log("획득한 카드", cards)
      wait("start")
    } else if (score == 8) {
      // console.log("게임 시작 로딩 중")
      wait("end")
    }
  }, [score])

  return (
    <>
      {isLoading && (
        <Loading
          type={
            score === 0
              ? "start"
              : gameResult.items.length > 0
                ? "result"
                : "end"
          }
          gameResult={gameResult}
        />
      )}

      <GameContainer>
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
    </>
  )
}

export default CardGameBoard

const GameContainer = styled.div`
  margin-top: 7.2rem;
  padding: 0 3.2rem;
  padding-top: 6rem;
`
