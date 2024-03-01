import styled from "@emotion/styled"
import { User } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useCallback, useEffect, useRef, useState } from "react"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import LandLoading from "@/components/molecules/LandLoading"
import Island_ from "@/components/pages/island"
import VisitRequest from "@/components/pages/vist"

import useIsland from "@/hooks/useIsland"

import { getIslandInfo } from "@/utils/island"

const Island = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { islandType, islandItemExist } = useIsland()
  const {
    query: { id, name },
  } = useRouter()
  const stopLoading = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading && islandItemExist) {
      console.log("stop")
      stopLoading()
    }
  }, [islandType, islandItemExist, isLoading])
  return (
    <PageWrapper>
      <BackgroundLayout
        imgSrc={"/assets/background/bubble.png"}
        imgWidth={43}
        imgHeight={84.9}
        startColor="--gradient-yellow"
        endColor="--color-green-03"
        degree="180deg"
      >
        {!id ? <VisitRequest /> : isLoading ? <LandLoading /> : <Island_ />}
      </BackgroundLayout>
    </PageWrapper>
  )
}

export default Island

const PageWrapper = styled.div`
  background-color: var(--color-blue-01);

  display: flex;
  flex: 1;
  min-height: inherit;
  flex-direction: column;
  justify-content: space-between;
`
