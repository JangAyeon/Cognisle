import styled from "@emotion/styled"
import { ReactNode, useContext, useState } from "react"
import Draggable, {
  DraggableData,
  DraggableEventHandler,
} from "react-draggable"

import { ILandItem, ITEM_SVG } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

import { LocationProps } from "@/types/common/islandProps"

import DraggableContext, {
  DraggableContextInterface,
} from "@/utils/draggableContext"
import { setIslandItemLoc } from "@/utils/island"

type DraggableItem = LocationProps & {
  height: ILandItem["height"]
  width: ILandItem["width"]
  active: boolean
  isOwner?: boolean
  title: string
}

type DraggableState = Pick<
  DraggableItem,
  "active" | "x" | "y" | "z" | "title" | "active" | "id"
>

const DragItem = ({
  isOwner,
  id,
  x,
  y,
  z,
  title,
  width,
  height,
}: DraggableItem) => {
  const { islandItemLoc, islandIsEdit } = useIsland()
  const { zIndex, setZIndex }: DraggableContextInterface =
    useContext(DraggableContext)
  const SVGItem = ITEM_SVG[id]

  const [state, setState] = useState<DraggableState>({
    id: id,
    x: x,
    y: y,
    z: z,
    title: title,
    active: false,
  })
  const trackPos = (id: DraggableItem["id"], data: DraggableData) => {
    setState({
      id: id,
      x: data.x,
      y: data.y,
      active: true,
      title: title,
      z: state.z,
    })
  }
  const onStart: DraggableEventHandler | undefined = () => {
    setState({ ...state, z: zIndex + 1, active: true })
    setZIndex(zIndex + 1)
  }

  const updateLocation = (item: DraggableState) => {
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
      disabled={!isOwner || !islandIsEdit}
    >
      <ItemContainer zIndex={state.z}>
        <SVGWrapper width={width} height={height}>
          <SVGItem />
        </SVGWrapper>
      </ItemContainer>
    </Draggable>
  )
}

const ItemContainer = styled.div<{ zIndex: number }>`
  z-index: ${({ zIndex }) => `${zIndex}`};
  position: relative;
  width: fit-content;
  height: fit-content;
`

const SVGWrapper = styled.div<{
  width: ILandItem["width"]
  height: ILandItem["height"]
}>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`

export default DragItem
