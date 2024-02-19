import styled from "@emotion/styled"
import { useContext, useState } from "react"
import Draggable, {
  DraggableData,
  DraggableEventHandler,
} from "react-draggable"

import DraggableContext, {
  DraggableContextInterface,
} from "@/utils/draggableContext"

interface DraggableItem {
  x: number
  y: number
  zIndex: number
  active: boolean
}

const DragItem = ({ child }: { child: JSX.Element }) => {
  const { zIndex, setZIndex }: DraggableContextInterface =
    useContext(DraggableContext)

  const [state, setState] = useState<DraggableItem>({
    x: 0,
    y: 0,
    zIndex: zIndex,
    active: false,
  })
  const trackPos = (data: DraggableData) => {
    // console.log(data.x, data.y, state.active, state.zIndex)
    setState({ x: data.x, y: data.y, active: true, zIndex: state.zIndex })
  }
  const onStart: DraggableEventHandler | undefined = () => {
    setState({ ...state, zIndex: zIndex + 1, active: true })
    setZIndex(zIndex + 1)
  }

  const onStop = () => {
    setState({ ...state, active: false })
  }

  return (
    <Draggable
      axis="both"
      defaultPosition={state}
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
