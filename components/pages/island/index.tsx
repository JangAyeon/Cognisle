import LandCategory from "@/components/molecules/LandCategory"
import MyLandControl from "@/components/molecules/MyLandControl"
import useUserProfile from "@/hooks/useUser"
import { ICategory } from "@/types/categoryTabs"
import { useState } from "react"

const CATEGORY_MENU: ICategory[] = [
  { id: 0, title: "배경", value: "background" },
  { id: 1, title: "아이템", value: "item" },
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
  return (
    <>
      <MyLandControl
        name={userName}
        isEdit={isEdit}
        handleSaveBtn={handleSaveBtn}
        setIsEdit={setIsEdit}
      />
      {isEdit && (
        <LandCategory
          list={CATEGORY_MENU}
          category={category}
          setCategory={setCategory}
        />
      )}
    </>
  )
}

export default Island
