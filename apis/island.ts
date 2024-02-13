import { User } from "@supabase/supabase-js"

import { itemIdMax } from "@/constants/game"

import { supabase } from "@/apis/instance"

import { IIsland } from "@/types/common/islandProps"

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
  supabase
    .from("itemStatus")

    .upsert(
      {
        userId: userId,
        ...data,
      },
      { onConflict: "userId" }
    )

const islandApi = {
  getItemLoc,
  getBackground,
  saveIsland,
}

export default islandApi
