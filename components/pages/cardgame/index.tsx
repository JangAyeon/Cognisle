import GameState from "@/components/molecules/GameState"
import PlayBoard from "@/components/molecules/PlayBoard"
import useGame from "@/hooks/useGame"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

import recordApi from "@/apis/recordApi"
import Loading from "./loading"
import { GameLoadingProps, IGameResult } from "@/types/common/gameProps"

const CardGameBoard = () => {
  const { computedBoardState, onCardClick, score, time, moves, cards } =
    useGame()
  const [isLoading, setIsLoading] = useState(true)
  const [gameResult, setGameResult] = useState<IGameResult>({
    moves: 0,
    items: [],
    time: 0,
  })

  const postGameResult = async (idArray: number[]) => {
    const data = {}
    console.log("서버에 전송")
    console.log(data)
  }
  const getItems = async (idArray: number[]) => {
    const { data, error } = await recordApi.getItemsByIdArray(idArray)
    // await new Promise((resolve) => setTimeout(resolve, 3000))
    console.log(data)
    if (data?.length) {
      setGameResult({ moves, time, items: data })
    }
  }

  const tempget = () => {
    const temp = {
      moves: 9,
      time: 20,
      items: [
        { title: "dnknl" },
        { title: "dnknl" },
        { title: "dnknl" },
        { title: "dnknl" },
        { title: "dnknl" },
      ],
    }
    setGameResult(temp)
  }

  useEffect(() => {
    tempget()
  }, [])

  const wait = async (type: GameLoadingProps) => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (type === "end") {
      // getItems(cards)
      tempget()
      // postGameResult(cards)
    } else {
      setIsLoading(false)
    }
  }
  /*
  useEffect(() => {
    if (score === 0) {
      console.log("획득한 카드", cards)
      wait("end")
    } else if (score == 8) {
      console.log("게임 시작 로딩 중")
      wait("start")
    }
  }, [score])
  */
  return (
    <>
      {isLoading && (
        <Loading
          type={
            score === 8
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
