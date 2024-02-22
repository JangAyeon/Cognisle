import styled from "@emotion/styled"
import { useState } from "react"

import DragItem from "@/pages/drag/draggableItem"

import Bear from "@/public/assets/image/fasd.svg"
import Rain from "@/public/assets/image/rain.svg"
import Btn from "@/public/assets/image/saf.svg"

import DraggableContext from "@/utils/draggableContext"

const dragContainer = () => {
  const defaultItem = [<Bear />, <Btn />]
  const additionalItem = [<Rain />]
  const [zIndex, setZIndex] = useState(3)
  const [Items, setItems] = useState(defaultItem)

  const ItemSelected = (item: JSX.Element) => {
    // console.log("ItemSelected")
    setItems([...Items, item])
  }

  return (
    <DraggableContext.Provider value={{ zIndex, setZIndex }}>
      <DragField>
        {/*{Items.map((item, idx) => (
          <DragItem key={idx} child={item} xPos={} yPos={}/>
        ))}*/}
      </DragField>
      <ItemContainer>
        {additionalItem.map((item, idx) => (
          <ItemWrapper onClick={() => ItemSelected(item)} key={idx}>
            {item}
          </ItemWrapper>
        ))}
      </ItemContainer>
    </DraggableContext.Provider>
  )
}

export default dragContainer

const DragField = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid blue;
  margin: 100px;
  position: relative;
`

const ItemContainer = styled.div``

const ItemWrapper = styled.div`
  border: 1px solid red;
`
