import { Board, makeGameBoard } from "@/utils/gameBoard"
import { useCallback, useMemo, useState } from "react"

export interface Card {
  value: number
  state: "hidden" | "selected" | "revealed"
}

export interface CardData extends Card {
  position: [number, number]
}

interface IonClick {
  data: CardData
  cardPosition: [number, number]
  value: number
}

const useGame = () => {
  const [board, setBoard] = useState<Board>(makeGameBoard())

  const [time, setTime] = useState(0)
  const [moves, setMoves] = useState(0)
  const [score, setScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState<CardData[]>([])
  const [computedBoardState, setComputedBoardState] = useState<Card[][]>()
  const [boardFreeze, setBoardFreeze] = useState(false)
  const [startTimer, setStartTimer] = useState(false)

  const isGameFinished = useMemo(
    () =>
      computedBoardState?.every((row) =>
        row.every((cell) => cell.state === "revealed")
      ),
    [computedBoardState]
  )

  const onFirstChipClick = useCallback(
    ({ data, cardPosition, value }: IonClick) => {
      setComputedBoardState((prev) => {
        let stateTemp = prev?.map((row) => row.map((cell) => cell))
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
    ({ cardPosition, value }: Omit<IonClick, "data">) => {
      const firstSelectedCard = selectedCards[0]
      if (selectedCards[0].value === value) {
        setComputedBoardState((prev) => {
          let stateTemp = prev?.map((row) => row.map((cell) => cell))
          if (stateTemp) {
            stateTemp[cardPosition[0]][cardPosition[1]] = {
              value,
              state: "revealed",
            }
            stateTemp[firstSelectedCard.position[0]][
              firstSelectedCard.position[1]
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
            stateTemp[firstSelectedCard.position[0]][
              firstSelectedCard.position[1]
            ] = {
              value: firstSelectedCard.value,
              state: "selected",
            }
            return stateTemp
          }
        })
      }
      setTimeout(() => {
        setComputedBoardState((prev) => {
          let stateTemp = prev?.map((row) => row.map((cell) => cell))
          if (stateTemp) {
            stateTemp[cardPosition[0]][cardPosition[1]] = {
              value,
              state: "hidden",
            }
            stateTemp[firstSelectedCard.position[0]][
              firstSelectedCard.position[1]
            ] = {
              value: firstSelectedCard.value,
              state: "hidden",
            }
            return stateTemp
          }
        })
        setSelectedCards([])
        setBoardFreeze(false)
      }, 1000)
    },
    [selectedCards, boardFreeze]
  )

  const onCardClick = useCallback(
    (_: React.MouseEvent<HTMLSpanElement, MouseEvent>, data: CardData) => {
      const { position, state, value } = data
      if (!computedBoardState) {
        return
      }
      if (boardFreeze) {
        return
      }
      if (!startTimer) {
        setStartTimer(true)
      }
      if (selectedCards.length === 0) {
        if (state === "hidden") {
          onFirstChipClick({ data, position, value })
        }
      } else if (selectedCards.length === 1) {
        if (state === "hidden") {
          onSecondChipClick({ chipPosition, value })
          setMoves((prev) => prev + 1)
        }
      }
    },
    [selectedCards, computedBoardState]
  )
}

export default useGame
