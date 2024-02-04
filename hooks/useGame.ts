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
  value: number
}

const useGame = () => {
  const [board, setBoard] = useState<Board>(makeGameBoard())

  const [time, setTime] = useState(0)
  const [moves, setMoves] = useState(0)
  const [selectedChips, setSelectedChips] = useState<CardData[]>([])
  const [computedBoardState, setComputedBoardState] = useState<Card[][]>()

  const [startTimer, setStartTimer] = useState(false)

  const isGameFinished = useMemo(
    () =>
      computedBoardState?.every((row) =>
        row.every((cell) => cell.state === "revealed")
      ),
    [computedBoardState]
  )

  const onFirstChipClick = useCallback(() => {}, [])
  const onSecondChipClick = useCallback(() => {}, [])

  const onCardClick = useCallback(
    (_: React.MouseEvent<HTMLSpanElement, MouseEvent>, data: CardData) => {
      const { position, state, value } = data
      if (!computedBoardState) {
        return
      }
      if (!startTimer) {
        setStartTimer(true)
      }
      if (selectedChips.length === 0) {
        if (state === "hidden") {
          onFirstChipClick({ data, position, value })
        }
      } else if (selectedChips.length === 1) {
        if (state === "hidden") {
          onSecondChipClick({ chipPosition, value })
          setMoves((prev) => prev + 1)
        }
      }
    },
    [selectedChips, computedBoardState]
  )
}

export default useGame
