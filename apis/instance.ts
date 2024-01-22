import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"
import axios, { AxiosError } from "axios"

// supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

const supabaseClient = createClientComponentClient()

// public API Instance
const _axios = axios.create({})

_axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const errorCode = (error as AxiosError).response?.status
    if (errorCode) {
      alert("_axios interceptors response: " + error.response?.data.message)
    }
  }
)

export { supabaseClient, supabase, _axios }
