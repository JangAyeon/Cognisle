import LandCategory from "@/components/molecules/LandCategory"
import LandItem from "@/components/molecules/LandItem"
import MyLandControl from "@/components/molecules/MyLandControl"
import useUserProfile from "@/hooks/useUser"
import { ICategory, ILand } from "@/types/categoryTabs"
import { useState } from "react"
import Image from "next/image"
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
  const { userName } = useUserProfile()
  /*const {
    query: { mode, id },
  } = useRouter()*/

  const [isEdit, setIsEdit] = useState(false)
  /*useEffect(() => {
    if (mode === "view") {
      setIsEdit(false)
    } else {
      setIsEdit(true)
    }
  }, [mode])
  console.log(mode, id)*/

  const handleSaveBtn = () => {
    console.log("저장")
  }
  const [category, setCategory] = useState<ICategory["id"]>(0)
  const [land, setLand] = useState(0)
  return (
    <>
      <MyLandControl
        name={userName}
        isEdit={isEdit}
        handleSaveBtn={handleSaveBtn}
        setIsEdit={setIsEdit}
      />
      <Image
        src={BACKGROUND_CHOICE[land].mainImgSrc}
        alt={BACKGROUND_CHOICE[land].title}
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
            land={land}
            setLand={setLand}
          />
        </>
      )}
    </>
  )
}

export default Island
