import { IIsland } from "@/types/common/islandProps"

import {
  setIslandItemExist as _setIslandItemExist,
  setIslandItemLoc as _setIslandItemLoc,
  setIslandType as _setIslandType,
} from "@/redux/common/islandSlice"
import { store } from "@/redux/store/store"

export const setIslandType = (id: IIsland["landType"]) => {
  store.dispatch(_setIslandType(id))
}

export const setIslandItemLoc = (items: IIsland["items"]) => {
  // console.log("setislandItems", items)
  store.dispatch(_setIslandItemLoc(items))
}

export const setIslandItemExist = (items: IIsland["exist"]) => {
  console.log("dispath", items)
  store.dispatch(_setIslandItemExist(items))
}
