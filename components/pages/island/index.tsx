import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import LandControl from "@/components/molecules/LandControl"
import LandContent from "@/components/molecules/LandDrag"

import { BACKGROUND_COLOR } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import { ICategory } from "@/types/categoryTabs"

const LandEdit = dynamic(() => import("@/components/molecules/LandEdit"))

const CATEGORY_MENU: ICategory[] = [
  { id: 0, title: "배경", value: "background" },
  { id: 1, title: "아이템", value: "item" },
]

const Island = () => {
  const [category, setCategory] = useState<ICategory["id"]>(0)
  const { islandIsEdit, islandType } = useIsland()
  const [isOwner, setIsOwner] = useState(true)
  const {
    query: { id, name },
  } = useRouter()

  const { userEmail } = useUserProfile()
  useEffect(() => {
    console.log(id, name)
    if (id && userEmail && id !== userEmail) {
      console.log("user is no island owner")
      setIsOwner(false)
    }
  }, [id, userEmail])

  return (
    <>
      <BackgroundLayout
        startColor={BACKGROUND_COLOR[islandType].startColor}
        endColor={BACKGROUND_COLOR[islandType].endColor}
        degree="180deg"
      >
        <LandControl isOwner={isOwner} name={name as string} />

        <LandContent isOwner={isOwner} />
        {isOwner && islandIsEdit && (
          <LandEdit
            list={CATEGORY_MENU}
            category={category}
            setCategory={setCategory}
          />
        )}
      </BackgroundLayout>
    </>
  )
}

export default Island
