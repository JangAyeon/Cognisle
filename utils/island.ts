import { IIsland } from "@/types/common/islandProps"

import {
  setIslandItems as _setIslandItems,
  setIslandType as _setIslandType,
} from "@/redux/common/islandSlice"
import { store } from "@/redux/store/store"

export const setIslandType = (id: IIsland["landType"]) => {
  store.dispatch(_setIslandType(id))
}

export const setIslandItems = (items: IIsland["items"]) => {
  // console.log("setislandItems", items)
  store.dispatch(_setIslandItems(items))
}
