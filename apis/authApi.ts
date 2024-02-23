import { Session } from "@supabase/auth-helpers-nextjs"
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js"

import { _axios, supabase, supabaseClient } from "./instance"

const signup = (data: object) =>
  supabaseClient.auth.signUp(data as SignUpWithPasswordCredentials)

const logout = () => supabaseClient.auth.signOut()

const login = (data: object) =>
  supabaseClient.auth.signInWithPassword(data as SignInWithPasswordCredentials)

const setSession = (data: object) =>
  supabaseClient.auth.setSession(data as Session)

const getSession = () => supabaseClient.auth.getSession()

const getUserProfile = () => supabaseClient.auth.getUser()

const getDsIdValid = (dsId: FormDataEntryValue) =>
  supabaseClient.from("23_final_user").select("*").eq("dsTag", dsId)

const authApi = {
  signup,
  login,
  logout,
  setSession,
  getSession,
  getUserProfile,
  getDsIdValid,
}

export { authApi }
