import { IAuthInfo, IUserInfo } from "@/types/common/authProps"

export const setUserInfo = ({ user, session }: IAuthInfo) => {
  console.log(user, session)

  const userInfo: IUserInfo = {
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    expires_in: session.expires_in,
    token_type: session.token_type,
    dsId: user.user_metadata.dsId,
    email: user.email,
    name: user.user_metadata.name,
  }
  console.log("setAuthInfo", userInfo)

  // 리덕스 디스 패치
}
