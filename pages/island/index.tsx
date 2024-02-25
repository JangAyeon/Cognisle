import styled from "@emotion/styled"
import { User } from "@supabase/supabase-js"
import Image from "next/image"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Island from "@/components/pages/island"

import { Bounce, POP_OUT } from "@/constants/animations"
import { BACKGROUND_COLOR } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import { getItemExist, getItemsLoc, getType } from "@/utils/island"

const Myland = () => {
  const { islandType, islandItemExist } = useIsland()
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
    }
  }, [id])
  const stopLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    getIslandInfo()
  }, [getIslandInfo])

  useEffect(() => {
    if (islandType && islandItemExist) {
      stopLoading()
    }
  }, [islandType, islandItemExist])

  return (
    <PageWrapper>
      {isLoading ? (
        <BackgroundLayout
          imgSrc={"/assets/background/bubble.svg"}
          imgWidth={43}
          imgHeight={84.9}
          startColor="--gradient-yellow"
          endColor="--color-green-03"
          degree="180deg"
        >
          <IconWrapper>
            <Image
              src="/assets/loading/loading.svg"
              width="240"
              height="320"
              alt="loading"
            />
          </IconWrapper>
        </BackgroundLayout>
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
  width: 100%;
  background-color: var(--color-blue-01);
  display: flex;
  flex-direction: column;
`

const IconWrapper = styled.div`
  width: 24rem;

  position: relative;
  animation: ${Bounce} 2s infinite ease-in-out;
`
