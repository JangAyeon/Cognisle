import { createContext } from "react"

interface DraggableContextInterface {
  zIndex: number
  setZIndex: (zIndex: number) => void
}

const initialState: DraggableContextInterface = {
  zIndex: 3,
  setZIndex: (index: number) => {},
}

const DraggableContext = createContext(initialState)

export default DraggableContext
export type { DraggableContextInterface }
