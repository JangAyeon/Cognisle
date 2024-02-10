import { User } from "@supabase/supabase-js"
import { supabase } from "@/apis/instance"

const itemLocation = [...Array(24)].map((v, idx) => `loc_${idx + 1}`).join(",")
const getItemLoc = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select(itemLocation)
    .eq("userId", userId)
    .maybeSingle()

const getBackground = (userId: User["id"]) =>
  supabase
    .from("itemStatus")
    .select("background")
    .eq("userId", userId)
    .maybeSingle()

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
