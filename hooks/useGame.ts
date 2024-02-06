import { makeInitalBoard } from "@/utils/gameBoard"
import type {
  ICard,
  TBoard,
  ICardData,
  IGameInfo,
  IOnClick,
} from "@/types/common/gameProps"
import { useCallback, useEffect, useMemo, useState } from "react"

const useGame = () => {
  const [board, setBoard] = useState<TBoard>(makeInitalBoard())

  const [time, setTime] = useState<IGameInfo["time"]>(0)
  const [moves, setMoves] = useState<IGameInfo["moves"]>(0)
  const [score, setScore] = useState<IGameInfo["score"]>(0)
  const [selectedCards, setSelectedCards] = useState<ICardData[]>([])
  const [computedBoardState, setComputedBoardState] = useState<ICard[][]>()
  const [boardFreeze, setBoardFreeze] =
    useState<IGameInfo["boardFreeze"]>(false)
  const [startTimer, setStartTimer] = useState<IGameInfo["startTimer"]>(false)

  const isGameFinished = useMemo(
    () =>
      computedBoardState?.every((row) =>
        row.every((cell) => cell.state === "revealed")
      ),
    [computedBoardState]
  )

  const onFirstChipClick = useCallback(
    ({ data, cardPosition, value }: IOnClick) => {
      setComputedBoardState((prev) => {
        let stateTemp = prev?.map((row) => row.map((cell) => cell))
        console.log(stateTemp)
        if (stateTemp) {
          stateTemp[cardPosition[0]][cardPosition[1]] = {
            value,
            state: "selected",
          }
          return stateTemp
        }
        return prev
      })
      setSelectedCards((prev) => [...prev, data])
    },
    []
  )
  const onSecondChipClick = useCallback(
    ({ cardPosition, value }: Omit<IOnClick, "data">) => {
      const firstSelectedCard = selectedCards[0]
      if (selectedCards[0].value === value) {
        console.log("mathch!!! ", value)
        setComputedBoardState((prev) => {
          let stateTemp = prev?.map((row) => row.map((cell) => cell))
          if (stateTemp) {
            stateTemp[cardPosition[0]][cardPosition[1]] = {
              value,
              state: "revealed",
            }
            stateTemp[firstSelectedCard.cardPosition[0]][
              firstSelectedCard.cardPosition[1]
            ] = {
              value,
              state: "revealed",
            }
            return stateTemp
          }
        })
        setSelectedCards([])
        setScore((prev) => prev + 1)
      } else {
        setBoardFreeze(true)
        setComputedBoardState((prev) => {
          let stateTemp = prev?.map((row) => row.map((cell) => cell))
          if (stateTemp) {
            stateTemp[cardPosition[0]][cardPosition[1]] = {
              value,
              state: "selected",
            }
            stateTemp[firstSelectedCard.cardPosition[0]][
              firstSelectedCard.cardPosition[1]
            ] = {
              value: firstSelectedCard.value,
              state: "selected",
            }
            return stateTemp
          }
        })
        setTimeout(() => {
          console.log("tiemoute")
          setComputedBoardState((prev) => {
            let stateCopy = prev?.map((row) => row.map((cell) => cell))

            if (stateCopy) {
              stateCopy[cardPosition[0]][cardPosition[1]] = {
                value,
                state: "hidden",
              }
              stateCopy[firstSelectedCard.cardPosition[0]][
                firstSelectedCard.cardPosition[1]
              ] = {
                value: firstSelectedCard.value,
                state: "hidden",
              }
              return stateCopy
            }
          })

          setSelectedCards([])
          setBoardFreeze(false)
        }, 1000)
      }
    },
    [selectedCards, boardFreeze]
  )

  const onCardClick = useCallback(
    (_: React.MouseEvent<HTMLSpanElement, MouseEvent>, data: ICardData) => {
      const { cardPosition, state, value } = data
      console.log(cardPosition, state, value)

      // 카드 맞추기가 아닌 경우
      if (!computedBoardState || boardFreeze) {
        return
      }
      // 타이머 아직 시작 되지 않은 경우
      if (!startTimer) {
        setStartTimer(true)
      }
      if (selectedCards.length === 0) {
        if (state === "hidden") {
          onFirstChipClick({ data, cardPosition, value })
        }
      } else if (selectedCards.length === 1) {
        if (state === "hidden") {
          onSecondChipClick({ cardPosition, value })
          setMoves((prev) => prev + 1)
        }
      }
    },
    [selectedCards, computedBoardState]
  )

  const onRestart = useCallback(() => {
    setComputedBoardState((prev) =>
      prev?.map((row) => row.map((cell) => ({ ...cell, state: "hidden" })))
    )
    setSelectedCards([])
  }, [computedBoardState])

  const onNewGame = useCallback(() => {
    setBoard(makeInitalBoard())
    setComputedBoardState(
      board?.map((row) => row.map((chip) => ({ value: chip, state: "hidden" })))
    )
    setSelectedCards([])
  }, [board, computedBoardState])

  useEffect(() => {
    setComputedBoardState(
      board?.map((row) => {
        return row.map((chip) => ({ value: chip, state: "hidden" }))
      })
    )
    console.log("useEffect board", board)
  }, [board])

  useEffect(() => {
    let timerInterval = setInterval(() => {}, 0)
    if (startTimer) {
      timerInterval = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    } else {
      clearInterval(timerInterval)
    }
    if (isGameFinished) {
      clearInterval(timerInterval)
    }
    return () => {
      clearInterval(timerInterval)
    }
  }, [startTimer, isGameFinished])

  return {
    board,
    setBoard,
    computedBoardState,
    setComputedBoardState,
    time,
    setTime,
    moves,
    setMoves,
    onCardClick,
    setStartTimer,
    score,
  }
}

export default useGame
