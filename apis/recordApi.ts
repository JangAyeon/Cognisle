import { supabase } from "@/apis/instance"
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
    .maybeSingle()

const itemLocation = [...Array(24)].map((v, idx) => `loc_${idx + 1}`).join(",")
const getItemLoc = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select(itemLocation)
    .eq("userId", userId)
    .maybeSingle()

const recordApi = { getItemById, getItemsByIdArray, getItemStatus, getItemLoc }

export default recordApi
