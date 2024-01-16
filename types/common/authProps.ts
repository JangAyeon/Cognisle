import { Session, User } from "@supabase/supabase-js"

export interface IUserInfo {
  access_token: Session["access_token"]
  refresh_token: Session["refresh_token"]
  expires_in: Session["expires_in"]
  token_type: Session["token_type"]
  email: User["email"]
  dsId: User["user_metadata"]["dsId"]
  name: User["user_metadata"]["name"]
}

export interface IAuthInfo {
  user: User
  session: Session
}
