import { configureStore } from "@reduxjs/toolkit"

import islandReducer from "../common/islandSlice"
import userReducer from "../common/userSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    island: islandReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
