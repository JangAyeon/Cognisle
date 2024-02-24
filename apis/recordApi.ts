import { User } from "@supabase/supabase-js"

import { itemIdMax } from "@/constants/game"

import { supabase } from "@/apis/instance"

import { GameItemResultProps } from "@/types/common/gameProps"
import { ItemExistProps } from "@/types/common/islandProps"

const getItemById = (itemId: number) =>
  supabase.from("recordItem").select("*").eq("id", itemId).maybeSingle()

const getItemsByIdArray = (itemIds: number[]) =>
  supabase.from("recordItem").select("title, id").in("id", itemIds)

const getMyItem = (userEmail: User["email"]) =>
  supabase
    .from("itemStatus")
    .select("exist_0")
    .eq("userEmail", userEmail)
    .single<ItemExistProps>()

// item1 ~ item24
const itemExist = [...Array(itemIdMax)]
  .map((v, idx) => `exist_${idx + 1}`)
  .join(",")
const getItemStatus = (userEmail: User["email"]) =>
  supabase
    .from("itemStatus")
    .select(itemExist)
    .eq("userEmail", userEmail)
    .single<ItemExistProps>()

const postGameResult = (userEmail: User["email"], data: GameItemResultProps) =>
  supabase
    .from("itemStatus")

    .upsert(
      {
        userEmail: userEmail,
        ...data,
      },
      { onConflict: "userEmail" }
    )
const recordApi = {
  getItemById,
  getItemsByIdArray,
  getItemStatus,
  getMyItem,
  postGameResult,
}

export default recordApi
