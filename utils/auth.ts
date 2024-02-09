import { store } from "@/redux/store/store"
import { IAuthSBInfo, IUserInfo } from "@/types/common/authProps"
import { setUserInfo as _setUserInfo, signout } from "@/redux/common/userSlice"
import { removeRefreshToken, setRefreshToken } from "@/utils/token"
import { authApi } from "@/apis/authApi"

export const setUserInfo = async ({ user, session }: IAuthSBInfo) => {
  //console.log(user)
  const userInfo: IUserInfo = {
    access_token: session.access_token,
    refresh_token: session.refresh_token,
    expires_in: session.expires_in,
    token_type: session.token_type,
    dsId: user.user_metadata.dsId,
    email: user.email,
    name: user.user_metadata.name,
    sbId: user.id,
  }

  // 리덕스 디스 패치
  store.dispatch(_setUserInfo(userInfo))
  // 리프레시 토큰 쿠키 값 세팅
  setRefreshToken(userInfo.refresh_token)
  await authApi.setSession({
    access_token: userInfo.access_token,
    refresh_token: userInfo.refresh_token,
  })
}

export const removeUserInfo = () => {
  // 리덕스 내 사용자 및 세션 정보 모두 제거
  store.dispatch(signout())
  // 리프레시 토큰 쿠키 값 제거
  removeRefreshToken()
}
