import styled from "@emotion/styled"
import { useContext, useState } from "react"
import Draggable, {
  DraggableData,
  DraggableEventHandler,
} from "react-draggable"

import { ILandItem } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

import {
  ItemIdProps,
  ItemLocationProps,
  LocationProps,
} from "@/types/common/islandProps"

import DraggableContext, {
  DraggableContextInterface,
} from "@/utils/draggableContext"
import { setIslandItemLoc } from "@/utils/island"

type DraggableItem = LocationProps & {
  child?: ILandItem["svg"]
  active: boolean
  isOwner?: boolean
}

const DragItem = ({ isOwner, id, x, y, z, child }: DraggableItem) => {
  console.log("dragItem", id, isOwner)
  const { islandItemLoc } = useIsland()
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

  const updateLocation = (item: DraggableItem) => {
    const data = { x: item.x, y: item.y, z: item.z, id: item.id }
    console.log("update", { ...islandItemLoc, [`loc_${data.id}`]: data })
    setIslandItemLoc({ ...islandItemLoc, [`loc_${data.id}`]: data })
  }

  const onStop = () => {
    setState({ ...state, active: false })
    updateLocation(state)
  }

  return (
    <Draggable
      axis="both"
      defaultPosition={state}
      onStart={onStart}
      onDrag={(e, data) => trackPos(id, data)}
      onStop={onStop}
      disabled={!isOwner}
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
