import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { AppTypeInitialState } from "../../utils/types"

const initialState: AppTypeInitialState = {
  isLoading: true,
  page: 1,
}

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
})

export const { setLoading, setPage } = AppSlice.actions
