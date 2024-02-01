import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface Pokemons {
  name: string
  url: string
}

interface PokemonsState {
  count: number
  next: string | null
  previous: string | null
  results: Pokemons[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | undefined
}

const initialState: PokemonsState = {
  status: "idle",
  count: 0,
  next: null,
  previous: null,
  results: [],
  error: undefined,
}

export const fetchData = createAsyncThunk("pokemons/fetchData", async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0",
    )
    return response.data
  } catch (error) {
    throw error
  }
})

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.status = "loading"
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.count = action.payload.count
        state.next = action.payload.next
        state.results = action.payload.results
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message || "Something went wrong."
      })
  },
})
