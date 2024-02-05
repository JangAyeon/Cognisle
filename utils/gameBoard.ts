export type BoardType = "4x4"
export type Board = Array<Array<number>>
type boardSpots = {
  [randomSpot: string]: { x: number; y: number }
}

interface BoardValue {
  max_: number
  min_: number
  count: number
}

export const getRandomNumnber = (
  max_: BoardValue["max_"],
  min_: BoardValue["min_"]
): number => {
  return Math.floor(Math.random() * max_) + min_
}
export const getRandomArray = (
  max_: BoardValue["max_"],
  min_: BoardValue["min_"],
  count: BoardValue["count"]
): Array<number> => {
  const randomArray: number[] = []
  while (randomArray.length < count) {
    const num = getRandomNumnber(max_, min_)
    if (!randomArray.includes(num)) {
      randomArray.push(num)
    }
  }

  return randomArray
}

export const makeGameBoard = (type: BoardType = "4x4"): Board => {
  let ROWS: number
  let COLS: number

  if (type === "4x4") {
    ROWS = 4
    COLS = 4
  } else {
    // 추후 처리 필요
    ROWS = 4
    COLS = 4
  }

  const Board: Board = []

  for (let r = 0; r < ROWS; r++) {
    Board.push([])
    for (let c = 0; c < COLS; c++) {
      Board[r].push(0)
    }
  }

  return insertRandomNumbers(Board)
}

export const insertRandomNumbers = (Board: Board): Board => {
  let computedBoard = Board
  let totalSpots: number
  let maxNumber: number

  if (computedBoard.length === 4) {
    totalSpots = 4 * 4
    maxNumber = 4
  } else {
    totalSpots = 4
    maxNumber = 4
  }

  const randomSpots: boardSpots = {}

  while (true) {
    if (Object.keys(randomSpots).length === totalSpots) {
      break
    }

    const x = getRandomNumnber(maxNumber, 0)
    const y = getRandomNumnber(maxNumber, 0)

    const randomSpotKey = Math.random()

    if (!Object.values(randomSpots).find((val) => val.x === x && val.y === y)) {
      randomSpots[randomSpotKey] = { x, y }
    }

    let counter = 2
    const spotMax_ = 30
    const spotMin_ = 1
    // console.log("randomSpots", randomSpots)
    const currNumberArr = getRandomArray(spotMax_, spotMin_, totalSpots / 2)
    let idx = 0

    Object.values(randomSpots).forEach((spot) => {
      computedBoard[spot.x][spot.y] = currNumberArr[idx]
      counter--
      if (counter === 0) {
        counter = 2
        idx += 1
      }
    })
  }

  return Board
}
