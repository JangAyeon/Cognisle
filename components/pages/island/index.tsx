import LandCategory from "@/components/molecules/LandCategory"
import LandItem from "@/components/molecules/LandItem"
import LandControl from "@/components/molecules/MyLandControl"
import useUserProfile from "@/hooks/useUser"
import { ICategory } from "@/types/categoryTabs"
import { useEffect, useState } from "react"
import useIsland from "@/hooks/useIsland"
import islandApi from "@/apis/island"
import { setIslandType, setIslandItems } from "@/utils/island"
import { useRouter } from "next/router"
import Image from "next/image"
import styled from "@emotion/styled"
import { LAND_CHOICE } from "@/constants/island"

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
          <LandItem
            list={category === 0 ? LAND_CHOICE : []}
            land={islandType}
            setLand={setIslandType}
          />
        </EditWrapper>
      )}
    </>
  )
}

const EditWrapper = styled.div``

export default Island
