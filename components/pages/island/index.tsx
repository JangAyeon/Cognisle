import styled from "@emotion/styled"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import LandCategory from "@/components/molecules/LandCategory"
import LandControl from "@/components/molecules/LandControl"
import LandContent from "@/components/molecules/LandDrag"
import LandItem from "@/components/molecules/LandItem"
import LandType from "@/components/molecules/LandType"

import { LAND_CHOICE } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import islandApi from "@/apis/island"

import { ICategory } from "@/types/categoryTabs"

import { setIslandType } from "@/utils/island"

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
  const { islandType, islandItemLoc, islandItemExist } = useIsland()
  const [isEdit, setIsEdit] = useState(false)
  /*useEffect(() => {
    if (mode === "view") {
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }, [mode])
  console.log(mode, id)*/

  const handleSaveBtn = async () => {
    const body = {
      background: islandType,
      ...islandItemLoc,
    }

    const { data, error } = await islandApi.saveIsland(userSbId, body)

    if (!error) {
      alert("저장 성공했습니다.")
      router.reload()
    }
  }
  const [category, setCategory] = useState<ICategory["id"]>(0)

  /*
  useEffect(() => {
    console.log(islandType)
  }, [islandType])
*/
  return (
    <>
      <LandControl
        name={userName}
        isEdit={isEdit}
        handleSaveBtn={handleSaveBtn}
        setIsEdit={setIsEdit}
      />

      <LandContent />
      {isEdit && (
        <EditWrapper>
          <LandCategory
            list={CATEGORY_MENU}
            category={category}
            setCategory={setCategory}
          />
          <LandSelectWrapper>
            {category === 0 ? (
              <LandType
                list={LAND_CHOICE}
                land={islandType}
                setLand={setIslandType}
              />
            ) : (
              islandItemExist.length && <LandItem list={islandItemExist} />
            )}
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
