import styled from "@emotion/styled"
import { useEffect, useState } from "react"

import StatItem from "@/components/atoms/item/StatItem"

import { itemIdMax } from "@/constants/game"

import useUserProfile from "@/hooks/useUser"

import recordApi from "@/apis/recordApi"

import { ItemExistKey, ItemExistProps } from "@/types/common/islandProps"

const ItemStats = () => {
  const [itemExist, setItemExist] = useState<ItemExistProps | null>(null)
  const { userEmail } = useUserProfile()

  const getItemStatus = async () => {
    // console.log(userSbId)

    const { data, error } = await recordApi.getItemStatus(userEmail)
    // console.log(data)

    if (!error) {
      setItemExist(data)
    }
  }
  useEffect(() => {
    // setData(createData())
    if (userEmail) {
      getItemStatus()
    }
  }, [userEmail])
  return (
    <ItemStatsWrapper>
      {itemExist &&
        [...Array(itemIdMax)].map((v, idx) => (
          <StatItem
            name="아이템 이름"
            imgSrc={`/assets/${
              itemExist[`exist_${idx}` as ItemExistKey] ? "yellow" : "grey"
            }/circle.svg`}
            status={itemExist[`exist_${idx}` as ItemExistKey]}
            key={idx}
            content={idx}
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
