import DraggableContext, {
  DraggableContextInterface,
} from "@/utils/draggableContext"
import styled from "@emotion/styled"
import { useContext, useState } from "react"
import Draggable, {
  DraggableEventHandler,
  DraggableData,
} from "react-draggable"

interface DraggableItem {
  x: number
  y: number
  zIndex: number
  active: boolean
}

const DragItem = ({ child }: { child: JSX.Element }) => {
  const { index, setIndex }: DraggableContextInterface =
    useContext(DraggableContext)

  const [state, setState] = useState<DraggableItem>({
    x: 0,
    y: 0,
    zIndex: index,
    active: false,
  })
  const trackPos = (data: DraggableData) => {
    // console.log(data.x, data.y, state.active, state.zIndex)
    setState({ x: data.x, y: data.y, active: true, zIndex: state.zIndex })
  }
  const onStart: DraggableEventHandler | undefined = () => {
    setState({ ...state, zIndex: index + 1, active: true })
    setIndex(index + 1)
  }

  const onStop = () => {
    setState({ ...state, active: false })
  }

  return (
    <Draggable
      axis="both"
      defaultPosition={state}
      bounds="parent"
      onStart={onStart}
      onDrag={(e, data) => trackPos(data)}
      onStop={onStop}
    >
      <ItemContainer zIndex={state.zIndex}>{child}</ItemContainer>
    </Draggable>
  )
}

const ItemContainer = styled.div<{ zIndex: number }>`
  z-index: ${({ zIndex }) => `${zIndex}`};
  position: relative;
  width: fit-content;
  height: fit-content;
`

export default DragItem
