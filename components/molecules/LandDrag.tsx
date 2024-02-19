import styled from "@emotion/styled"
import Image from "next/image"
import { useEffect, useState } from "react"

import { ITEM_CHOICE, LAND_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

import {
  ItemIdProps,
  ItemLocationProps,
  LocationProps,
} from "@/types/common/islandProps"

import DragItem from "@/pages/drag/draggableItem"

import AlphaE from "@/public/assets/items/alphaE.svg"

import DraggableContext from "@/utils/draggableContext"

const LandContent = () => {
  const { islandType, islandItemLoc, islandItemExist } = useIsland()
  const [zIndex, setZIndex] = useState(3)
  const [items, setItems] = useState<LocationProps[]>([])

  // console.log("land content", items)

  useEffect(() => {
    if (islandItemExist.length) {
      // console.log(items, islandItemExist, islandItemLoc)
      const data: LocationProps[] = []
      for (let item of islandItemExist) {
        if (islandItemLoc[`loc_${item}`]) {
          data.push(islandItemLoc[`loc_${item}`] as LocationProps)
        }
      }

      console.log("data", data)
      setItems(data)
    }
  }, [islandItemExist.length])
  return (
    <>
      <DraggableContext.Provider value={{ zIndex, setZIndex }}>
        <Image
          src={LAND_CHOICE[islandType].mainImgSrc}
          alt={LAND_CHOICE[islandType].title}
          width={430}
          height={430}
        />

        {items.length &&
          items.map((item: LocationProps) => (
            <DragItem
              key={item.id}
              id={item.id}
              child={ITEM_CHOICE[`${item.id}`].svg}
              x={item.x}
              y={item.y}
              z={item.z}
              active={false}
            />
          ))}
      </DraggableContext.Provider>
    </>
  )
}

export default LandContent

const DragField = styled.div`
  width: 100%;
  height: 100%;
`
