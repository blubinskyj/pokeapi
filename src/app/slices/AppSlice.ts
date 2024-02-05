import { createSlice } from "@reduxjs/toolkit"
import type { AppTypeInitialState } from "../../utils/types"

const initialState: AppTypeInitialState = {
  isLoading: true,
  toasts: [],
}

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
})
