import { useSelector } from "react-redux"

import {
  selectIslandIsEdit,
  selectIslandItem0,
  selectIslandItemExsit,
  selectIslandItemLoc,
  selectIslandType,
} from "@/redux/common/islandSlice"

export const useIsland = () => {
  const islandIsEdit = useSelector(selectIslandIsEdit)
  const islandType = useSelector(selectIslandType)
  const islandItemLoc = useSelector(selectIslandItemLoc)
  const islandItem0 = useSelector(selectIslandItem0)
  const islandItemExist = useSelector(selectIslandItemExsit)

  return {
    islandIsEdit,
    islandType,
    islandItemLoc,
    islandItem0,
    islandItemExist,
  }
}

export default useIsland
