import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { IIsland } from "@/types/common/islandProps"

import { AppState } from "@/redux/store/store"

const initialState: { island: IIsland } = {
  island: {
    landType: 0,
    isEdit: false,
    items: {
      loc_0: null,
      loc_1: null,
      loc_2: null,
      loc_3: null,
      loc_4: null,
      loc_5: null,
      loc_6: null,
      loc_7: null,

      loc_8: null,
      loc_9: null,

      loc_10: null,

      loc_11: null,
      loc_12: null,

      loc_13: null,

      loc_14: null,
      loc_15: null,
      loc_16: null,
      loc_17: null,

      loc_18: null,
      loc_19: null,

      loc_20: null,
      loc_21: null,
      loc_22: null,
      loc_23: null,
      loc_24: null,
      loc_25: null,
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
    setIslandIsEdit: (state, action: PayloadAction<IIsland["isEdit"]>) => {
      state.island.isEdit = action.payload
    },
    setIslandItemExist: (state, action: PayloadAction<IIsland["exist"]>) => {
      state.island.exist = action.payload
    },
  },
})

export const {
  setIslandType,
  setIslandItemLoc,
  setIslandItemExist,
  setIslandIsEdit,
} = islandSlice.actions

export const selectIslandType = (state: AppState) =>
  state.island.island.landType
export const selectIslandItemLoc = (state: AppState) =>
  state.island.island.items
export const selectIslandIsEdit = (state: AppState) =>
  state.island.island.isEdit
export const selectIslandItem0 = (state: AppState) =>
  state.island.island.items.loc_0
export const selectIslandItemExsit = (state: AppState) =>
  state.island.island.exist
export default islandSlice.reducer
