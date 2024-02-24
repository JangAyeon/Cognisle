import styled from "@emotion/styled"
import { useCallback, useEffect, useState } from "react"

import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"

import useGame from "@/hooks/useGame"
import useUserProfile from "@/hooks/useUser"

import recordApi from "@/apis/recordApi"

import { GameLoadingProps, IGameResult } from "@/types/common/gameProps"

import Loading from "./loading"

const CardGameBoard = () => {
  const { userEmail, userSbId } = useUserProfile()
  const [stageType, setStageType] = useState<GameLoadingProps>("start")
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
    setStageType(type)
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    if (type === "end") {
      getItems(cards)
    }
    if (type == "start" || type == "end") {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (score === 0) {
      wait("start")
    } else if (score == 8) {
      // console.log("게임 시작 로딩 중")
      wait("end")
    }
    if (gameResult.items.length === 8) {
      wait("result")
    }
  }, [score, gameResult.items.length])

  return (
    <>
      {isLoading && <Loading type={stageType} gameResult={gameResult} />}

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
  padding: 6rem 3.2rem;
`
