import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import LandControl from "@/components/molecules/LandControl"
import LandContent from "@/components/molecules/LandDrag"
import LandEdit from "@/components/molecules/LandEdit"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import { ICategory } from "@/types/categoryTabs"

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

  const { userEmail } = useUserProfile()
  useEffect(() => {
    if (id && userEmail && id !== userEmail) {
      console.log("user is no island owner")
      setIsOwner(false)
    }
  }, [id, userEmail])

  return (
    <>
      <LandControl isOwner={isOwner} />

      <LandContent isOwner={isOwner} />
      {isOwner && islandIsEdit && (
        <LandEdit
          list={CATEGORY_MENU}
          category={category}
          setCategory={setCategory}
        />
      )}
    </>
  )
}

export default Island
