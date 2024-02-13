import { createContext } from "react"

interface DraggableContextInterface {
  index: number
  setIndex: (index: number) => void
}

const initialState: DraggableContextInterface = {
  index: 3,
  setIndex: (index: number) => {},
}

const DraggableContext = createContext(initialState)

export default DraggableContext
export type { DraggableContextInterface }
