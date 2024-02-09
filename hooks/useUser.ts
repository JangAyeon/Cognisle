import {
  selectUserDsId,
  selectUserEmail,
  selectUserName,
  selectUserSbId,
} from "@/redux/common/userSlice"
import { useSelector } from "react-redux"

export const useUserProfile = () => {
  //  state.user.userInfo.dsId, state.user.userInfo.name, state.user.userInfo.email
  const userDsId = useSelector(selectUserDsId)
  const userEmail = useSelector(selectUserEmail)
  const userName = useSelector(selectUserName)
  const userSbId = useSelector(selectUserSbId)

  // console.log("useUserProfile", userDsId, userEmail, userName)

  return {
    userDsId,
    userEmail,
    userName,
    userSbId,
  }
}

export default useUserProfile
