import { useEffect } from "react"
import { useSelector } from "react-redux"

import {
  selectUserDsId,
  selectUserEmail,
  selectUserName,
  selectUserSbId,
} from "@/redux/common/userSlice"

export const useUserProfile = () => {
  //  state.user.userInfo.dsId, state.user.userInfo.name, state.user.userInfo.email
  const userDsId = useSelector(selectUserDsId)
  const userEmail = useSelector(selectUserEmail)
  const userName = useSelector(selectUserName)
  const userSbId = useSelector(selectUserSbId)

  useEffect(() => {
    // console.log("useUserProfile", userDsId, userEmail, userName, userSbId)
  }, [userDsId, userEmail, userName, userSbId])

  return {
    userDsId,
    userEmail,
    userName,
    userSbId,
  }
}

export default useUserProfile
