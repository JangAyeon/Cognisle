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
  adminAuthClient.updateUserById("c638f9b3-984b-406a-b612-76e2c1470f83", {
    user_metadata: { dsId: "유송_6237" },
  })
/* supabase.auth.admin.updateUserById("8e2d808f-bd81-413b-b4f7-362546ccd9d6", {
    user_metadata: { dsId: "hahah" },
  })*/

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
}

export { authApi }
