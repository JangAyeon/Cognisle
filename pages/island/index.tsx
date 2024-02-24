import styled from "@emotion/styled"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useEffect } from "react"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Island from "@/components/pages/island"

import { BACKGROUND_COLOR } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import { getItemExist, getItemsLoc, getType } from "@/utils/island"

const Myland = () => {
  const { islandType } = useIsland()
  const {
    query: { id },
  } = useRouter()
  useEffect(() => {
    if (id) {
      // 현재 서버에 저장된 섬타입, 아이템 위치, 아이템 소유목록 dispatch
      console.log("현재 저장된 섬 정보 불러오기", id)
      getType(id as User["email"])
      getItemsLoc(id as User["email"])
      getItemExist(id as User["id"])
    }
  }, [id])
  return (
    <PageWrapper>
      {" "}
      <BackgroundLayout
        startColor={BACKGROUND_COLOR[islandType].startColor}
        endColor={BACKGROUND_COLOR[islandType].endColor}
        degree="180deg"
      >
        <Island />
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Myland

const PageWrapper = styled.div`
  min-height: inherit;
  background-color: var(--color-blue-01);
  display: flex;
`
