import { createSlice } from "@reduxjs/toolkit"
import type { PokemonInitialStateType } from "../../utils/types"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData"
import { getPokemonData } from "../reducers/getPokemonData"

const initialState: PokemonInitialStateType = {
  allPokemon: undefined,
  pokemonList: undefined,
  currentPokemon: undefined,
}

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    })
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.pokemonList = action.payload
    })
  },
})
