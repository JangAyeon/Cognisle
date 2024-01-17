import { store } from "@/redux/store/store"
import { IAuthSBInfo, IUserInfo } from "@/types/common/authProps"
import { setUserInfo as _setUserInfo } from "@/redux/common/userSlice"
export const setUserInfo = ({ user, session }: IAuthSBInfo) => {
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
  store.dispatch(_setUserInfo(userInfo))
}
