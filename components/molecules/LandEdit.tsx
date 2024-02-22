import styled from "@emotion/styled"
import { Dispatch, SetStateAction } from "react"

import LandCategory from "@/components/molecules/LandCategory"
import LandItem from "@/components/molecules/LandItem"
import LandType from "@/components/molecules/LandType"

import { ICategory } from "@/types/categoryTabs"

interface ILandEdit {
  list: ICategory[]
  setCategory: Dispatch<SetStateAction<number>>
  category: number
}

const LandEdit = ({ list, setCategory, category }: ILandEdit) => {
  return (
    <EditWrapper>
      <LandCategory list={list} category={category} setCategory={setCategory} />
      <LandSelectWrapper>
        {category === 0 ? <LandType /> : <LandItem />}
      </LandSelectWrapper>
    </EditWrapper>
  )
}

export default LandEdit

const EditWrapper = styled.div`
  width: 43rem;
  position: fixed;
  bottom: 7.2rem;
`

const LandSelectWrapper = styled.div`
  height: 16.8rem;
`
