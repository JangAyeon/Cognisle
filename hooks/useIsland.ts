import { useSelector } from "react-redux"

import {
  selectIslandType,
  selectIslandItems,
  selectIslandItem0,
} from "@/redux/common/islandSlice"

export const useIsland = () => {
  const islandType = useSelector(selectIslandType)
  const islandItems = useSelector(selectIslandItems)
  const islandItem0 = useSelector(selectIslandItem0)

  return {
    islandType,
    islandItems,
    islandItem0,
  }
}

export default useIsland
