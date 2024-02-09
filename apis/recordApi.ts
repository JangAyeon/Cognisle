import { supabase } from "@/apis/instance"

const getItemById = (itemId: number) =>
  supabase.from("recordItem").select("*").eq("id", itemId).maybeSingle()

const recordApi = { getItemById }

export default recordApi
