import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IUserInfo } from "@/types/common/authProps"

import { AppState } from "@/redux/store/store"

const initialState: { userInfo: IUserInfo } = {
  userInfo: {
    access_token: "",
    refresh_token: "",
    expires_in: 0,
    token_type: "",
    email: "",
    dsId: "",
    name: "",
    sbId: "",
  },
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signout: () => initialState,
    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload
    },
  },
})

export const { signout, setUserInfo } = userSlice.actions

export const selectAccessToken = (state: AppState) =>
  state.user.userInfo.access_token
export const selectRefreshToken = (state: AppState) =>
  state.user.userInfo.refresh_token

export const selectUserSbId = (state: AppState) => state.user.userInfo.sbId
export const selectUserDsId = (state: AppState) => state.user.userInfo.dsId

export const selectUserName = (state: AppState) => state.user.userInfo.name

export const selectUserEmail = (state: AppState) => state.user.userInfo.email

export const selectExpire = (state: AppState) => state.user.userInfo.expires_in

export const selectTokenType = (state: AppState) =>
  state.user.userInfo.token_type

export default userSlice.reducer
