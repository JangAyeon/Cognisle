import { User } from "@supabase/supabase-js"

import { itemIdMax } from "@/constants/game"

import { supabase } from "@/apis/instance"
import recordApi from "@/apis/recordApi"

import {
  IIsland,
  ItemExistKey,
  ItemIdProps,
  isLandItemIdType,
} from "@/types/common/islandProps"

// item1부터 item24까지
const itemLocation = [...Array(itemIdMax)]
  .map((v, idx) => `loc_${idx + 1}`)
  .join(",")
const getItemLoc = (userEmail: User["email"]) =>
  supabase
    .from("itemStatus")
    .select(itemLocation)
    .eq("userEmail", userEmail)
    .single<IIsland["items"]>()

const getBackground = (userEmail: User["email"]) =>
  supabase
    .from("itemStatus")
    .select("background")
    .eq("userEmail", userEmail)
    .single()

const saveIsland = (userEmail: User["email"], data: object) =>
  supabase.from("itemStatus").upsert(
    {
      userEmail: userEmail,
      ...data,
    },
    { onConflict: "userEmail" }
  )

const getItemIds = async (userEmail: User["email"]) => {
  const { data, error } = await recordApi.getItemStatus(userEmail)
  // console.log(data)
  const result: Array<ItemIdProps> = []
  if (!error) {
    for (const key in data) {
      if (data[key as ItemExistKey]) {
        const value = Number(key.replace("exist_", ""))
        if (isLandItemIdType(value)) {
          result.push(value as ItemIdProps)
        }
      }
    }
    // console.log("result", result)
  }
  return result
}

const islandApi = {
  getItemLoc,
  getBackground,
  saveIsland,
  getItemIds,
}

export default islandApi
