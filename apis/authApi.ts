import { supabase, _axios } from "./instance"
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js"

const signup = (data: object) =>
  supabase.auth.signUp(data as SignUpWithPasswordCredentials)

const logout = () => supabase.auth.signOut()

const login = (data: object) =>
  supabase.auth.signInWithPassword(data as SignInWithPasswordCredentials)

const authApi = {
  signup,
  login,
  logout,
}

export { authApi }
