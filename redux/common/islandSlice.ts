import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IIsland } from "@/types/common/islandProps"

import { AppState } from "@/redux/store/store"

const initialState: { island: IIsland } = {
  island: {
    landType: 0,
    items: {
      loc_0: {},
      loc_1: {},
      loc_2: {},
      loc_3: {},

      loc_4: {},
      loc_5: {},
      loc_6: {},
      loc_7: {},

      loc_8: {},
      loc_9: {},

      loc_10: {},

      loc_11: {},
      loc_12: {},

      loc_13: {},

      loc_14: {},
      loc_15: {},
      loc_16: {},
      loc_17: {},

      loc_18: {},
      loc_19: {},

      loc_20: {},
      loc_21: {},
      loc_22: {},
      loc_23: {},
      loc_24: {},
    },
    exist: [],
  },
}
export const islandSlice = createSlice({
  name: "island",
  initialState,
  reducers: {
    setIslandType: (state, action: PayloadAction<IIsland["landType"]>) => {
      state.island.landType = action.payload
    },
    setIslandItemLoc: (state, action: PayloadAction<IIsland["items"]>) => {
      state.island.items = action.payload
    },
    setIslandItemExist: (state, action: PayloadAction<IIsland["exist"]>) => {
      state.island.exist = action.payload
    },
  },
})

export const { setIslandType, setIslandItemLoc, setIslandItemExist } =
  islandSlice.actions

export const selectIslandType = (state: AppState) =>
  state.island.island.landType
export const selectIslandItemLoc = (state: AppState) =>
  state.island.island.items
export const selectIslandItem0 = (state: AppState) =>
  state.island.island.items.loc_0
export const selectIslandItemExsit = (state: AppState) =>
  state.island.island.exist
export default islandSlice.reducer
