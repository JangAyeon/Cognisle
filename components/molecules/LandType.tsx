import styled from "@emotion/styled"
import Image from "next/image"

import { LAND_CHOICE } from "@/constants/island"

import { setIslandType } from "@/utils/island"

const LandType = () => {
  // console.log(list)          list={LAND_CHOICE}

  return (
    <Wrapper>
      {LAND_CHOICE.map(({ thumbImgSrc, title, id }) => (
        <div onClick={() => setIslandType(id)}>
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
