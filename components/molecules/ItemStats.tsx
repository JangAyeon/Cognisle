import StatItem from "@/components/atoms/item/StatItem"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

interface IItem {
  name: string
  status: boolean
  imgSrc: string
}

function getStatus(i: number) {
  const status = i % 2 == 0 ? false : true
  const name = "아이템 이름"
  const imgSrc: string = `/assets/${status ? "yellow" : "grey"}/circle.svg`
  return { imgSrc, name, status }
}

function createData() {
  const arr = []
  for (let i = 0; i < 30; i++) {
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
        data.map(({ name, imgSrc, status }, idx) => (
          <StatItem name={name} imgSrc={imgSrc} status={status} key={idx} />
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
