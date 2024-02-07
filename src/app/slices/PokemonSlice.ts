import { createSlice } from "@reduxjs/toolkit"
import type { PokemonInitialStateType } from "../../utils/types"
import { getInitialPokemonData } from "../reducers/getInitialPokemonData"
import { getPokemonData } from "../reducers/getPokemonData"
import { getInitialTypeData } from "../reducers/getInitialTypeData"
import { getTypeData } from "../reducers/getTypeData"

const initialState: PokemonInitialStateType = {
  allPokemon: undefined,
  allTypes: undefined,
  pokemonList: undefined,
  currentPokemon: undefined,
  filter: undefined,
}

export const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setCurrentPokemon: (state, action) => {
      state.currentPokemon = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(getInitialPokemonData.fulfilled, (state, action) => {
      state.allPokemon = action.payload
    })
    builder.addCase(getInitialTypeData.fulfilled, (state, action) => {
      state.allTypes = action.payload
    })
    builder.addCase(getPokemonData.fulfilled, (state, action) => {
      state.pokemonList = action.payload
    })
    builder.addCase(getTypeData.fulfilled, (state, action) => {
      state.pokemonList = action.payload
    })
  },
})

export const { setCurrentPokemon, setFilter } = PokemonSlice.actions
