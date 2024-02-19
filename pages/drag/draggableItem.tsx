import styled from "@emotion/styled"
import { useContext, useState } from "react"
import Draggable, {
  DraggableData,
  DraggableEventHandler,
} from "react-draggable"

import { ItemIdProps } from "@/types/common/islandProps"

import DraggableContext, {
  DraggableContextInterface,
} from "@/utils/draggableContext"

interface DraggableItem {
  id: ItemIdProps
  x: number
  y: number
  z: number
  active: boolean
}

const DragItem = ({
  id,
  x,
  y,
  z,
  child,
}: DraggableItem & {
  child: JSX.Element
}) => {
  const { zIndex, setZIndex }: DraggableContextInterface =
    useContext(DraggableContext)

  const [state, setState] = useState<DraggableItem>({
    id: id,
    x: x,
    y: y,
    z: z,
    active: false,
  })
  const trackPos = (id: DraggableItem["id"], data: DraggableData) => {
    console.log(data.x, data.y, state.active, state.z)
    setState({
      id: id,
      x: data.x,
      y: data.y,
      active: true,
      z: state.z,
    })
  }
  const onStart: DraggableEventHandler | undefined = () => {
    setState({ ...state, z: zIndex + 1, active: true })
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
      onDrag={(e, data) => trackPos(id, data)}
      onStop={onStop}
    >
      <ItemContainer zIndex={state.z}>{child}</ItemContainer>
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
