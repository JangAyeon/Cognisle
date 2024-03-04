import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"
import axios, { AxiosError } from "axios"

// supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)
const supabaseAuth = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlhcWlnZnRtaXJnZm55Zmt4d3V4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDQ5OTkyOSwiZXhwIjoyMDE2MDc1OTI5fQ.rhI9N_uN00NOC-xQTvVgwC00fGp4JXT8W6mHNCX4Kgk",
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
// supabase Client Side Rendering
const supabaseClient = createPagesBrowserClient()

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

export { supabaseClient, supabase, _axios, supabaseAuth }
