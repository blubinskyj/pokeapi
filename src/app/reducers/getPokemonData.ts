import { createAsyncThunk } from "@reduxjs/toolkit"
import type { genericPokemonType } from "../../utils/types"
import axios from "axios"
import type { generatedPokemonType } from "../../utils/types"

export const getPokemonData = createAsyncThunk(
  "pokemon/pokemonList",
  async (pokemons: genericPokemonType[]) => {
    try {
      const pokemonsData: generatedPokemonType[] = []
      for await (const pokemon of pokemons) {
        const {
          data,
        }: {
          data: {
            id: number
            types: { type: genericPokemonType }[]
            sprites: { front_default: string }
          }
        } = await axios.get(pokemon.url)
        const types = data.types.map(type => {
          return type.type.name
        })
        pokemonsData.push({
          name: pokemon.name,
          id: data.id,
          image: data.sprites.front_default,
          types,
        })
      }
      console.log(pokemonsData, "pokemonsData")
      return pokemonsData
    } catch (err) {
      console.log(err)
    }
  },
)
