import styled from "@emotion/styled"
import { Dispatch, SetStateAction } from "react"

import BorderPointBtn from "@/components/atoms/button/BorderPointBtn"

import { ICategory } from "@/types/categoryTabs"

interface ILandCategory {
  list: ICategory[]
  category: ICategory["id"]
  setCategory: Dispatch<SetStateAction<number>>
}

const LandCategory = ({ list, category, setCategory }: ILandCategory) => {
  return (
    <Wrapper>
      {list.map((item, idx) => (
        <div onClick={() => setCategory(item.id)}>
          <BorderPointBtn
            key={idx}
            width={12}
            height={4}
            pointHeight={90}
            pointWidth={20}
            mainColor={
              item.id === category ? "--color-yellow-01" : "--color-green-03"
            }
            borderRadius={0}
            pointColor="--color-green-04"
            text={item.title}
            textColor="--color-green-04"
            textSize={1.5}
          />
        </div>
      ))}
    </Wrapper>
  )
}

export default LandCategory

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
