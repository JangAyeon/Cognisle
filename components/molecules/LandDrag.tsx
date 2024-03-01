import styled from "@emotion/styled"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

import DragItem from "@/components/drag/draggable"

import { ITEM_CHOICE, LAND_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"

import { LocationProps } from "@/types/common/islandProps"

import DraggableContext from "@/utils/draggableContext"

const LandContent = ({ isOwner }: { isOwner: boolean }) => {
  const { islandType, islandItemLoc, islandItemExist } = useIsland()
  const [zIndex, setZIndex] = useState(3)
  const [items, setItems] = useState<LocationProps[]>([])

  // console.log("land content", items)

  const setIslandItem = useCallback(() => {
    // console.log("itemExist", islandItemExist)
    if (islandItemExist.length > 0 && islandItemExist) {
      // console.log(items, islandItemExist, islandItemLoc)
      const data: LocationProps[] = []

      for (let item of islandItemExist) {
        if (islandItemLoc[`loc_${item}`]) {
          // console.log("data", islandItemLoc[`loc_${item}`], items)
          // setItems([...items, islandItemLoc[`loc_${item}`] as LocationProps])
          data.push(islandItemLoc[`loc_${item}`] as LocationProps)
        }
      }

      // console.log("data", data)
      setItems(data)
    }
  }, [islandItemExist, islandItemLoc])

  useEffect(() => {
    setIslandItem()
  }, [setIslandItem])
  return (
    <>
      <DraggableContext.Provider value={{ zIndex, setZIndex }}>
        {items && (
          <IslandContainer>
            <Image
              src={LAND_CHOICE[islandType].mainImgSrc}
              alt={LAND_CHOICE[islandType].title}
              fill
              priority
              sizes="100%"
            />
            <ItemsContainer>
              {items.length > 0 &&
                items.map((item: LocationProps, index: number) => (
                  <DragWrapper isFirst={index === 0 ? true : false}>
                    <DragItem
                      isOwner={isOwner}
                      key={item.id}
                      id={item.id}
                      title={ITEM_CHOICE[`${item.id}`].title}
                      x={item.x}
                      y={item.y}
                      z={item.z}
                      width={ITEM_CHOICE[`${item.id}`].width}
                      height={ITEM_CHOICE[`${item.id}`].height}
                      active={false}
                    />
                  </DragWrapper>
                ))}
            </ItemsContainer>
          </IslandContainer>
        )}
      </DraggableContext.Provider>
    </>
  )
}

export default LandContent

const IslandContainer = styled.div`
  width: 43rem;
  height: 78rem;
  position: relative;
`

const ItemsContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: inherit;
`

const DragWrapper = styled.div<{ isFirst: boolean }>`
  position: ${({ isFirst }) => (isFirst ? `static` : "absolute")};
  top: 0;
  left: 0;
`
