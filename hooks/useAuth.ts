import { useSelector } from "react-redux"

import {
  selectAccessToken,
  selectExpire,
  selectRefreshToken,
  selectTokenType,
} from "@/redux/common/userSlice"

export const useAuth = () => {
  const refreshToken = useSelector(selectRefreshToken)
  const accessToken = useSelector(selectAccessToken)
  const expireDate = useSelector(selectExpire)
  const tokenType = useSelector(selectTokenType)
  // console.log("useAuth", refreshToken, accessToken, expireDate, tokenType)

  return {
    refreshToken,
    accessToken,
    expireDate,
    tokenType,
  }
}

export default useAuth
