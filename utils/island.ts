import {
  setIslandBackground as _setIslandBackground,
  setIslandItems as _setIslandItems,
} from "@/redux/common/islandSlice"
import { store } from "@/redux/store/store"
import { IIsland } from "@/types/common/islandProps"

export const setIslandBackground = (id: IIsland["background"]) => {
  store.dispatch(_setIslandBackground(id))
}

export const setislandItems = (items: IIsland["items"]) => {
  console.log("setislandItems", items)
  store.dispatch(_setIslandItems(items))
}
