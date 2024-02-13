import {
  setIslandType as _setIslandType,
  setIslandItems as _setIslandItems,
} from "@/redux/common/islandSlice"
import { store } from "@/redux/store/store"
import { IIsland } from "@/types/common/islandProps"

export const setIslandType = (id: IIsland["landType"]) => {
  store.dispatch(_setIslandType(id))
}

export const setIslandItems = (items: IIsland["items"]) => {
  // console.log("setislandItems", items)
  store.dispatch(_setIslandItems(items))
}
