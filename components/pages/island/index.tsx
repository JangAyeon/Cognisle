import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import LandCategory from "@/components/molecules/LandCategory"
import LandControl from "@/components/molecules/LandControl"
import LandItem from "@/components/molecules/LandItem"
import LandType from "@/components/molecules/LandType"

import { ITEM_CHOICE, LAND_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import islandApi from "@/apis/island"

import { ICategory } from "@/types/categoryTabs"

import { setIslandItems, setIslandType } from "@/utils/island"

const CATEGORY_MENU: ICategory[] = [
  { id: 0, title: "배경", value: "background" },
  { id: 1, title: "아이템", value: "item" },
]

const Island = () => {
  const router = useRouter()
  const { userName, userSbId } = useUserProfile()
  /*const {
    query: { mode, id },
  } = useRouter()*/
  const { islandType, islandItems } = useIsland()
  const [isEdit, setIsEdit] = useState(false)
  /*useEffect(() => {
    if (mode === "view") {
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }, [mode])
  console.log(mode, id)*/

  const getIsLand = async () => {
    const { data, error } = await islandApi.getBackground(userSbId)

    if (data) {
      setIslandType(data.background)
    }
  }

  const getItems = async () => {
    const { data, error } = await islandApi.getItemLoc(userSbId)
    // console.log(data)

    if (!error) {
      setIslandItems(data)
    }
  }

  useEffect(() => {
    if (userSbId) {
      getIsLand()
      getItems()
    }
  }, [userSbId])

  const handleSaveBtn = async () => {
    const body = {
      background: islandType,
      ...islandItems,
    }

    const { data, error } = await islandApi.saveIsland(userSbId, body)

    if (!error) {
      alert("저장 성공했습니다.")
      router.reload()
    }
  }
  const [category, setCategory] = useState<ICategory["id"]>(0)

  return (
    <>
      <LandControl
        name={userName}
        isEdit={isEdit}
        handleSaveBtn={handleSaveBtn}
        setIsEdit={setIsEdit}
      />

      <Image
        src={LAND_CHOICE[islandType].mainImgSrc}
        alt={LAND_CHOICE[islandType].title}
        width={430}
        height={430}
      />

      {isEdit && (
        <EditWrapper>
          <LandCategory
            list={CATEGORY_MENU}
            category={category}
            setCategory={setCategory}
          />
          {category === 0 ? (
            <LandType
              list={LAND_CHOICE}
              land={islandType}
              setLand={setIslandType}
            />
          ) : (
            <LandItem list={ITEM_CHOICE} />
          )}
        </EditWrapper>
      )}
    </>
  )
}

const EditWrapper = styled.div``

export default Island
