import { supabase } from "@/apis/instance"

const getItemById = (itemId: number) =>
  supabase.from("recordItem").select("*").eq("id", itemId).maybeSingle()

const getItemsByIdArray = (itemIds: number[]) =>
  supabase.from("recordItem").select("title, id").in("id", itemIds)

const recordApi = { getItemById, getItemsByIdArray }

export default recordApi
