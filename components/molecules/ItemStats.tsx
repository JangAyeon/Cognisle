import StatItem from "@/components/atoms/item/StatItem"
import { spotMax_, spotMin_ } from "@/constants/game"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

interface IItem {
  name: string
  status: boolean
  imgSrc: string
  content: number
}

function getStatus(i: number) {
  const status = i % 2 == 0 ? false : true
  const content = i
  const name = "아이템 이름"
  const imgSrc: string = `/assets/${status ? "yellow" : "grey"}/circle.svg`
  return { imgSrc, name, status, content }
}

function createData() {
  const arr = []
  for (let i = spotMin_; i <= spotMax_; i++) {
    arr.push(getStatus(i))
  }
  return arr
}

const ItemStats = () => {
  const [data, setData] = useState<IItem[]>([])

  useEffect(() => {
    setData(createData())
  }, [])
  return (
    <ItemStatsWrapper>
      {data.length &&
        data.map(({ name, imgSrc, status, content }, idx) => (
          <StatItem
            name={name}
            imgSrc={imgSrc}
            status={status}
            key={idx}
            content={content}
          />
        ))}
    </ItemStatsWrapper>
  )
}

const ItemStatsWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  column-gap: 2.6rem;
  row-gap: 3.1rem;
`
export default ItemStats
