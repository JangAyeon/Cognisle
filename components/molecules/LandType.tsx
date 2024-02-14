import styled from "@emotion/styled"
import Image from "next/image"

import { ILand } from "@/types/categoryTabs"

interface ILandItem {
  list: ILand[]
  land: number
  setLand: (id: ILand["id"]) => void
}

const LandType = ({ list, land, setLand }: ILandItem) => {
  // console.log(list)
  return (
    <Wrapper>
      {list.map(({ thumbImgSrc, title, id }) => (
        <div onClick={() => setLand(id)}>
          <Image src={thumbImgSrc} alt={title} width={112} height={112} />
        </div>
      ))}
    </Wrapper>
  )
}

export default LandType

const Wrapper = styled.div`
  height: 100%;
  background-color: var(--color-yellow-01);
  padding: 0 2.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
