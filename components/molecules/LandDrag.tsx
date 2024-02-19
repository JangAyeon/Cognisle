import styled from "@emotion/styled/macro"
import Image from "next/image"
import { useEffect, useState } from "react"

import { LAND_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

import DragItem from "@/pages/drag/draggableItem"

import DraggableContext from "@/utils/draggableContext"

const LandContent = () => {
  const { islandType, islandItemLoc, islandItemExist } = useIsland()
  const [zIndex, setZIndex] = useState(3)
  const [items, setItems] = useState<any>([])

  useEffect(() => {
    if (islandItemExist.length) {
      islandItemExist.map((item) =>
        setItems([...items, islandItemLoc[`loc_${item}`]])
      )
    }
  }, [islandItemExist.length])
  return (
    <>
      <DraggableContext.Provider value={{ zIndex, setZIndex }}>
        <DragField>
          <Image
            src={LAND_CHOICE[islandType].mainImgSrc}
            alt={LAND_CHOICE[islandType].title}
            width={430}
            height={430}
          />
          {items.map((item, idx) => (
            <DragItem key={idx} child={item.svg} xPos={item.x} yPos={item.y} />
          ))}
        </DragField>
      </DraggableContext.Provider>
    </>
  )
}

export default LandContent

const DragField = styled.div``
