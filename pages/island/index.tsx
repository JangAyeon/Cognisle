import styled from "@emotion/styled"
import { useEffect } from "react"

import BackgroundLayout from "@/components/layouts/BackgroundLayout"
import Island from "@/components/pages/island"

import { BACKGROUND_COLOR } from "@/constants/island"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import islandApi from "@/apis/island"

import {
  setIslandItemExist,
  setIslandItemLoc,
  setIslandType,
} from "@/utils/island"

const Myland = () => {
  const { userSbId } = useUserProfile()
  const { islandType, islandItemLoc } = useIsland()
  const getType = async () => {
    const { data, error } = await islandApi.getBackground(userSbId)

    if (data) {
      setIslandType(data.background)
    }
  }

  const getItemsLoc = async () => {
    const { data, error } = await islandApi.getItemLoc(userSbId)
    // console.log(data)

    if (!error) {
      setIslandItemLoc(data)
    }
  }

  const getItemExist = async () => {
    const data = await islandApi.getItemIds(userSbId)
    console.log("data", data)
    setIslandItemExist(data)
  }

  useEffect(() => {
    if (userSbId) {
      // 현재 서버에 저장된 섬타입, 아이템 위치, 아이템 소유목록 dispatch
      getType()
      getItemsLoc()
      getItemExist()
    }
  }, [userSbId])
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
