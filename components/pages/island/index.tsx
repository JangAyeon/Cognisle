import styled from "@emotion/styled"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import LandCategory from "@/components/molecules/LandCategory"
import LandControl from "@/components/molecules/LandControl"
import LandContent from "@/components/molecules/LandDrag"
import LandItem from "@/components/molecules/LandItem"
import LandType from "@/components/molecules/LandType"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import { ICategory } from "@/types/categoryTabs"

import { setIslandIsEdit } from "@/utils/island"

const CATEGORY_MENU: ICategory[] = [
  { id: 0, title: "배경", value: "background" },
  { id: 1, title: "아이템", value: "item" },
]

const Island = () => {
  const [category, setCategory] = useState<ICategory["id"]>(0)
  const { islandIsEdit } = useIsland()
  const [isOwner, setIsOwner] = useState(true)
  const {
    query: { id },
  } = useRouter()

  const { userSbId } = useUserProfile()
  useEffect(() => {
    if (id !== userSbId) {
      setIsOwner(false)
    }
  }, [id, userSbId])

  return (
    <>
      <LandControl isOwner={isOwner} />

      <LandContent isOwner={isOwner} />
      {islandIsEdit && (
        <EditWrapper>
          <LandCategory
            list={CATEGORY_MENU}
            category={category}
            setCategory={setCategory}
          />
          <LandSelectWrapper>
            {category === 0 ? <LandType /> : <LandItem />}
          </LandSelectWrapper>
        </EditWrapper>
      )}
    </>
  )
}

const EditWrapper = styled.div`
  width: 43rem;
  position: fixed;
  bottom: 7.2rem;
`

const LandSelectWrapper = styled.div`
  height: 16.8rem;
`

export default Island
