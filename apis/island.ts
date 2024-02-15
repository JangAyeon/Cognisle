import { User } from "@supabase/supabase-js"

import { itemIdMax } from "@/constants/game"

import { supabase } from "@/apis/instance"
import recordApi from "@/apis/recordApi"

import {
  IIsland,
  isLandItemIdType,
  itemIdProps,
} from "@/types/common/islandProps"

const itemLocation = [...Array(itemIdMax)]
  .map((v, idx) => `loc_${idx + 1}`)
  .join(",")
const getItemLoc = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select(itemLocation)
    .eq("userId", userId)
    .single<IIsland["items"]>()

const getBackground = (userId: User["id"]) =>
  supabase.from("itemStatus").select("background").eq("userId", userId).single()

const saveIsland = (userId: User["id"], data: object) =>
  supabase.from("itemStatus").upsert(
    {
      userId: userId,
      ...data,
    },
    { onConflict: "userId" }
  )

const getItemIds = async (userId: User["id"]) => {
  const { data, error } = await recordApi.getItemStatus(userId)
  console.log(data)
  const result: Array<IIsland["exist"]> = []
  if (!error) {
    for (let key in data) {
      if (data[key]) {
        const value = Number(key.replace("exist_", ""))

        if (isLandItemIdType(value)) {
          result.push(value as IIsland["exist"])
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
