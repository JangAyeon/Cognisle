import LandCategory from "@/components/molecules/LandCategory"
import LandItem from "@/components/molecules/LandItem"
import MyLandControl from "@/components/molecules/MyLandControl"
import useUserProfile from "@/hooks/useUser"
import { ICategory, ILand } from "@/types/categoryTabs"
import { useEffect, useState } from "react"
import Image from "next/image"
import useIsland from "@/hooks/useIsland"
import islandApi from "@/apis/island"
import { setIslandBackground, setislandItems } from "@/utils/island"
import { IIsland } from "@/types/common/islandProps"
import { useRouter } from "next/router"
const CATEGORY_MENU: ICategory[] = [
  { id: 0, title: "배경", value: "background" },
  { id: 1, title: "아이템", value: "item" },
]

const BACKGROUND_CHOICE: ILand[] = [
  {
    id: 0,
    title: "morning",
    thumbImgSrc: "/assets/control/background/morning.png",
    mainImgSrc: "/assets/control/land/morning.png",
  },
  {
    id: 1,
    title: "evening",
    thumbImgSrc: "/assets/control/background/evening.png",
    mainImgSrc: "/assets/control/land/evening.png",
  },
  {
    id: 2,
    title: "night",
    thumbImgSrc: "/assets/control/background/night.png",
    mainImgSrc: "/assets/control/land/night.png",
  },
]

const Island = () => {
  const router = useRouter()
  const { userName, userSbId } = useUserProfile()
  /*const {
    query: { mode, id },
  } = useRouter()*/
  const { islandBackground, islandItems } = useIsland()
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

    if (data?.background) {
      setIslandBackground(data?.background)
    }
  }

  const getItems = async () => {
    const { data, error } = await islandApi.getItemLoc(userSbId)
    console.log(data)

    if (!error) {
      setislandItems(data)
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
      background: islandBackground,
      ...islandItems,
    }

    const { data, error } = await islandApi.saveIsland(userSbId, body)

    alert("저장 성공했습니다.")
    router.reload()
  }
  const [category, setCategory] = useState<ICategory["id"]>(0)

  return (
    <>
      <MyLandControl
        name={userName}
        isEdit={isEdit}
        handleSaveBtn={handleSaveBtn}
        setIsEdit={setIsEdit}
      />

      <Image
        src={BACKGROUND_CHOICE[islandBackground].mainImgSrc}
        alt={BACKGROUND_CHOICE[islandBackground].title}
        width={430}
        height={430}
      />

      {isEdit && (
        <>
          <LandCategory
            list={CATEGORY_MENU}
            category={category}
            setCategory={setCategory}
          />
          <LandItem
            list={category === 0 ? BACKGROUND_CHOICE : []}
            land={islandBackground}
            setLand={setIslandBackground}
          />
        </>
      )}
    </>
  )
}

export default Island
