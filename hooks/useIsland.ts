import { useSelector } from "react-redux"

import {
  selectIslandItem0,
  selectIslandItemExsit,
  selectIslandItemLoc,
  selectIslandType,
} from "@/redux/common/islandSlice"

export const useIsland = () => {
  const islandType = useSelector(selectIslandType)
  const islandItemLoc = useSelector(selectIslandItemLoc)
  const islandItem0 = useSelector(selectIslandItem0)
  const islandItemExist = useSelector(selectIslandItemExsit)

  return {
    islandType,
    islandItemLoc,
    islandItem0,
    islandItemExist,
  }
}

export default useIsland
