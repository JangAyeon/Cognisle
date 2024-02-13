import { supabase } from "@/apis/instance"
import { IItemExist } from "@/types/common/islandProps"
import { User } from "@supabase/supabase-js"

const getItemById = (itemId: number) =>
  supabase.from("recordItem").select("*").eq("id", itemId).maybeSingle()

const getItemsByIdArray = (itemIds: number[]) =>
  supabase.from("recordItem").select("title, id").in("id", itemIds)

const itemExist = [...Array(24)].map((v, idx) => `exist_${idx + 1}`).join(",")
const getItemStatus = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select(itemExist)
    .eq("userId", userId)
    .single<IItemExist>()

const recordApi = {
  getItemById,
  getItemsByIdArray,
  getItemStatus,
}

export default recordApi
