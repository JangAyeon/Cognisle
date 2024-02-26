import styled from "@emotion/styled"
import { useEffect } from "react"

import StatItem from "@/components/atoms/item/StatItem"

import { itemIdMax } from "@/constants/game"

import useIsland from "@/hooks/useIsland"
import useUserProfile from "@/hooks/useUser"

import { ItemIdProps } from "@/types/common/islandProps"

import { getItemExist } from "@/utils/island"

const ItemStats = () => {
  const { userEmail } = useUserProfile()
  const { islandItemExist } = useIsland()
  useEffect(() => {
    if (userEmail) {
      // 현재 서버에 저장된 섬타입, 아이템 위치, 아이템 소유목록 dispatch
      console.log("현재 저장된 섬 정보 불러오기", userEmail)
      getItemExist(userEmail)
    }
  }, [userEmail])

  return (
    <ItemStatsWrapper>
      {[...Array(itemIdMax)].map((v, idx) => (
        <StatItem
          name="아이템 이름"
          imgSrc={`/assets/item/${
            islandItemExist.includes((idx + 1) as ItemIdProps)
              ? "active"
              : "inactive"
          }/item_${idx + 1}.svg`}
          status={islandItemExist.includes((idx + 1) as ItemIdProps)}
          key={idx}
          content={idx + 1}
        />
      ))}
    </ItemStatsWrapper>
  )
}

const ItemStatsWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content min-content min-content;
  column-gap: 2.6rem;
  row-gap: 3.1rem;
`
export default ItemStats
