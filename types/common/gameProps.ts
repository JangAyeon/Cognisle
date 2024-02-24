import { IRecordItem } from "@/types/recordItem"

type TBoardArrayType = "4x4"
type TBoard = Array<Array<number>>
type TBoardSpots = {
  [randomSpot: string]: { x: number; y: number }
}

interface IBoardValue {
  max_: number
  min_: number
  count: number
}

interface ICard {
  value: number
  state: "hidden" | "selected" | "revealed"
}

interface ICardData extends ICard {
  cardPosition: [number, number]
}

interface IOnClick {
  data: ICardData
  cardPosition: [number, number]
  value: number
}

interface IGameInfo {
  score: number
  moves: number
  time: number
  boardFreeze: boolean
  startTimer: boolean
}

type GameLoadingProps = "start" | "end" | "result"
type GameItemStateProps = { title: IRecordItem["title"]; id: number }
type GameItemResultProps = { [key: string]: boolean }
interface IGameResult {
  time: IGameInfo["time"]
  moves: IGameInfo["moves"]
  items: GameItemStateProps[]
}
export type {
  TBoardArrayType,
  ICard,
  ICardData,
  TBoard,
  TBoardSpots,
  IBoardValue,
  IOnClick,
  IGameInfo,
  GameLoadingProps,
  IGameResult,
  GameItemStateProps,
  GameItemResultProps,
}
