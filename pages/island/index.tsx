import styled from "@emotion/styled"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

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
  const [isLoading, setIsLoading] = useState(true)
  const getIslandInfo = useCallback(async () => {
    if (id) {
      // 현재 서버에 저장된 섬타입, 아이템 위치, 아이템 소유목록 dispatch
      setIsLoading(true)
      console.log("현재 저장된 섬 정보 불러오기", id)
      getType(id as User["email"])
      getItemsLoc(id as User["email"])
      getItemExist(id as User["email"])
      await new Promise((resolve) => setTimeout(resolve, 3000))
      setIsLoading(false)
    }
  }, [id])
  {
    /*
  useEffect(() => {
    setIsLoading(true)
    getIslandInfo()
  }, [getIslandInfo])*/
  }

  return (
    <PageWrapper>
      {isLoading ? (
        <VideoBox src="/video/loading.webm" autoPlay muted loop playsInline />
      ) : (
        <BackgroundLayout
          startColor={BACKGROUND_COLOR[islandType].startColor}
          endColor={BACKGROUND_COLOR[islandType].endColor}
          degree="180deg"
        >
          <Island />
        </BackgroundLayout>
      )}{" "}
    </PageWrapper>
  )
}

export default Myland

const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--color-blue-01);
  display: flex;
`

const VideoWrapper = styled.div``

const VideoBox = styled.video`
  width: 100%;
  height: 100%;
  display: block;
`
