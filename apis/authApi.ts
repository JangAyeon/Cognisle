import { Session } from "@supabase/auth-helpers-nextjs"
import {
  SignInWithPasswordCredentials,
  SignUpWithPasswordCredentials,
} from "@supabase/supabase-js"

import { _axios, supabase, supabaseAuth, supabaseClient } from "./instance"

// Access auth admin api
const adminAuthClient = supabaseAuth.auth.admin
const signup = (data: object) =>
  supabaseClient.auth.signUp(data as SignUpWithPasswordCredentials)

const logout = () => supabaseClient.auth.signOut()

const login = (data: object) =>
  supabaseClient.auth.signInWithPassword(data as SignInWithPasswordCredentials)

const setSession = (data: object) =>
  supabaseClient.auth.setSession(data as Session)

const getSession = () => supabaseClient.auth.getSession()

const getUpdate = () =>
  adminAuthClient.updateUserById("49929d5c-55a4-4d78-9594-18bb5bcb3e47", {
    user_metadata: { dsId: "hobbang_07002" },
  })

const changePassword = (userId: string, password: string) =>
  adminAuthClient.updateUserById(userId, {
    password: password,
  })

const getUserProfile = () => supabaseClient.auth.getUser()

const getDsIdValid = (dsId: FormDataEntryValue) =>
  supabase
    .from("23_final_user")
    .select("dsTag, dsGlobalName")
    .eq("dsTag", dsId)
    .single()

const getUserEmailExist = (email: FormDataEntryValue) =>
  supabase.from("userinfo").select("email, name").eq("email", email).single()
const authApi = {
  signup,
  login,
  logout,
  setSession,
  getSession,
  getUserProfile,
  getDsIdValid,
  getUserEmailExist,
  getUpdate,
  changePassword,
}

export { authApi }
