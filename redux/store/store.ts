import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../common/userSlice"
import islandReducer from "../common/islandSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    island: islandReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
