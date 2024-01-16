import { createContext } from "react"

export interface DraggableContextInterface {
  index: number
  setIndex: (index: number) => void
}

const initialState: DraggableContextInterface = {
  index: 3,
  setIndex: (index: number) => {},
}

export const DraggableContext = createContext(initialState)
