import { useSelector } from "react-redux"

import {
  selectIslandBackground,
  selectIslandItems,
  selectIslandItem0,
} from "@/redux/common/islandSlice"

export const useIsland = () => {
  const islandBackground = useSelector(selectIslandBackground)
  const islandItems = useSelector(selectIslandItems)
  const islandItem0 = useSelector(selectIslandItem0)

  return {
    islandBackground,
    islandItems,
    islandItem0,
  }
}

export default useIsland
