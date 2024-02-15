import { User } from "@supabase/supabase-js"

import { itemIdMax } from "@/constants/game"

import { supabase } from "@/apis/instance"

import { ItemExistProps } from "@/types/common/islandProps"

const getItemById = (itemId: number) =>
  supabase.from("recordItem").select("*").eq("id", itemId).maybeSingle()

const getItemsByIdArray = (itemIds: number[]) =>
  supabase.from("recordItem").select("title, id").in("id", itemIds)

const getMyItem = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select("exist_0")
    .eq("userId", userId)
    .single<ItemExistProps>()

// item1 ~ item24
const itemExist = [...Array(itemIdMax)]
  .map((v, idx) => `exist_${idx + 1}`)
  .join(",")
const getItemStatus = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select(itemExist)
    .eq("userId", userId)
    .single<ItemExistProps>()

const recordApi = {
  getItemById,
  getItemsByIdArray,
  getItemStatus,
  getMyItem,
}

export default recordApi
