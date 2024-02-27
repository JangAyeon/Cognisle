import styled from "@emotion/styled"
import { Dispatch, SetStateAction, useEffect } from "react"

import AuthModal from "@/components/modal/AuthModal"
import LandCategory from "@/components/molecules/LandCategory"
import LandItem from "@/components/molecules/LandItem"
import LandType from "@/components/molecules/LandType"

import useIsland from "@/hooks/useIsland"
import useStateModal from "@/hooks/useStateModal"

import { ICategory } from "@/types/categoryTabs"

interface ILandEdit {
  list: ICategory[]
  setCategory: Dispatch<SetStateAction<number>>
  category: number
}

const LandEdit = ({ list, setCategory, category }: ILandEdit) => {
  const { islandItemExist } = useIsland()
  const { state, text, isOpen, setIsOpen, setStateModal } = useStateModal()
  useEffect(() => {
    if (islandItemExist.length === 0) {
      setStateModal({
        state: "fail",
        text: "카드 게임으로 아이템을 획득해봐요",
        isOpen: true,
      })
    }
  }, [islandItemExist])
  return (
    <EditWrapper>
      {text && isOpen && (
        <AuthModal
          state={state}
          text={text}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
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
