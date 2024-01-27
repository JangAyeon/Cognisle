import { supabase, _axios, supabaseClient } from "./instance"
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js"
import { Session } from "@supabase/auth-helpers-nextjs"

const signup = (data: object) =>
  supabaseClient.auth.signUp(data as SignUpWithPasswordCredentials)

const logout = () => supabaseClient.auth.signOut()

const login = (data: object) =>
  supabaseClient.auth.signInWithPassword(data as SignInWithPasswordCredentials)

const setSession = (data: object) =>
  supabaseClient.auth.setSession(data as Session)

const getSession = () => supabaseClient.auth.getSession()

const getUserProfile = () => supabaseClient.auth.getUser()
const authApi = {
  signup,
  login,
  logout,
  setSession,
  getSession,
  getUserProfile,
}

export { authApi }
