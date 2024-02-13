import { AppState } from "@/redux/store/store"
import { IIsland } from "@/types/common/islandProps"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
  },
}
export const islandSlice = createSlice({
  name: "island",
  initialState,
  reducers: {
    setIslandType: (state, action: PayloadAction<IIsland["landType"]>) => {
      state.island.landType = action.payload
    },
    setIslandItems: (state, action: PayloadAction<IIsland["items"]>) => {
      state.island.items = action.payload
    },
  },
})

export const { setIslandItems, setIslandType } = islandSlice.actions

export const selectIslandType = (state: AppState) =>
  state.island.island.landType
export const selectIslandItems = (state: AppState) => state.island.island.items
export const selectIslandItem0 = (state: AppState) =>
  state.island.island.items.loc_0

export default islandSlice.reducer
