import styled from "@emotion/styled"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

import LandLoading from "@/components/molecules/LandLoading"
import Island from "@/components/pages/island"

import useIsland from "@/hooks/useIsland"

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

  return <PageWrapper>{isLoading ? <LandLoading /> : <Island />} </PageWrapper>
}

export default Myland

const PageWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-blue-01);
  display: flex;
  flex-direction: column;
`
