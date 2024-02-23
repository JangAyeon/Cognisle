import { Session, User } from "@supabase/supabase-js"

type TEmail = string
type TdsId = string
type TName = string
export interface IProfileInfo {
  email: TEmail
  dsId: TdsId
  name: TName
}
export interface IUserInfo {
  access_token: Session["access_token"]
  refresh_token: Session["refresh_token"]
  expires_in: Session["expires_in"]
  token_type: Session["token_type"]

  email: User["email"]
  dsId: TdsId
  name: TName
  sbId: User["id"]
}

export interface IAuthSBInfo {
  user: User
  session: Session
}

export interface ILoginInfo {
  access_token: Session["access_token"]
  refresh_token: Session["refresh_token"]
  expires_in: Session["expires_in"]
  token_type: Session["token_type"]
}

export interface IAuthInfo {
  LoginInfo: ILoginInfo
  ProfileInfo: IProfileInfo
}

export interface IForm {
  [key: string]: FormDataEntryValue | null
}
