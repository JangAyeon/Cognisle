import axios from "axios"
import { supabase, _axios } from "./instance"
import { SignUpWithPasswordCredentials } from "@supabase/supabase-js"

const signup = (data: object) =>
  supabase.auth.signUp(data as SignUpWithPasswordCredentials)

const logout = () => supabase.auth.signOut()

const authApi = {
  signup,
  logout,
}

export { authApi }
