import { User } from "@supabase/supabase-js"

import islandApi from "@/apis/island"

import { IIsland } from "@/types/common/islandProps"

import {
  setIslandIsEdit as _setIslandIsEdit,
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
  // console.log("dispath", items)
  store.dispatch(_setIslandItemExist(items))
}

export const setIslandIsEdit = (state: IIsland["isEdit"]) => {
  store.dispatch(_setIslandIsEdit(state))
}

export const getType = async (userEmail: User["email"]) => {
  const { data, error } = await islandApi.getBackground(userEmail)

  if (data) {
    setIslandType(data.background)
  }
}

export const getItemsLoc = async (userEmail: User["email"]) => {
  const { data, error } = await islandApi.getItemLoc(userEmail)
  // console.log(data)

  if (!error) {
    setIslandItemLoc(data)
  }
}

export const getItemExist = async (userEmail: User["email"]) => {
  const data = await islandApi.getItemIds(userEmail)
  // console.log("data", data)
  setIslandItemExist(data)
}

export const getIslandInfo = async (email: User["email"]) => {
  if (email) {
    // 현재 서버에 저장된 섬타입, 아이템 위치, 아이템 소유목록 dispatch
    console.log("현재 저장된 섬 정보 불러오기", email)
    getType(email as User["email"])
    getItemsLoc(email as User["email"])
    getItemExist(email as User["email"])
  }
}
