import recordApi from "@/apis/recordApi"
import StatItem from "@/components/atoms/item/StatItem"
import useUserProfile from "@/hooks/useUser"
import styled from "@emotion/styled"
import { useEffect, useState } from "react"

type ItemExistProps = { [key: string]: boolean }
const ItemStats = () => {
  const [itemExist, setItemExist] = useState<ItemExistProps>({})
  const { userSbId } = useUserProfile()

  const getItemStatus = async () => {
    console.log(userSbId)

    const { data, error } = await recordApi.getItemStatus(userSbId)

    if (data) {
      setItemExist(data as unknown as ItemExistProps)
    }
  }
  useEffect(() => {
    // setData(createData())
    if (userSbId) {
      getItemStatus()
    }
  }, [userSbId])
  return (
    <ItemStatsWrapper>
      {itemExist &&
        [...Array(24)].map((v, idx) => (
          <StatItem
            name="아이템 이름"
            imgSrc={`/assets/${
              itemExist[`exist_${idx}`] ? "yellow" : "grey"
            }/circle.svg`}
            status={itemExist[`exist_${idx}`]}
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
