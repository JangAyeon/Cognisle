import styled from "@emotion/styled"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"

import LandLoading from "@/components/molecules/LandLoading"
import Island from "@/components/pages/island"

import useIsland from "@/hooks/useIsland"

import {
  getIslandInfo,
  getItemExist,
  getItemsLoc,
  getType,
} from "@/utils/island"

const Myland = () => {
  const { islandType, islandItemExist } = useIsland()
  const {
    query: { id, name },
  } = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  const stopLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    getIslandInfo(id as User["email"])
  }, [id, name])

  useEffect(() => {
    if (isLoading && islandItemExist) {
      console.log("stop")
      stopLoading()
    }
  }, [islandType, islandItemExist, isLoading])

  return <PageWrapper>{isLoading ? <LandLoading /> : <Island />} </PageWrapper>
}

export default Myland

const PageWrapper = styled.div`
  min-height: inherit;
  width: 100%;
  background-color: var(--color-blue-01);
  display: flex;
  flex-direction: column;
`
