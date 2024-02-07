import { createAsyncThunk } from "@reduxjs/toolkit"
import type { genericPokemonType } from "../../utils/types"
import axios from "axios"
import type { generatedPokemonType } from "../../utils/types"

export const getTypeData = createAsyncThunk(
  "type/typeList",
  async (type: genericPokemonType) => {
    try {
      const pokemonsData: generatedPokemonType[] = []
      const {
        data,
      }: {
        data: {
          pokemon: { pokemon: genericPokemonType }[]
        }
      } = await axios.get(type.url)

      for await (const pokemon of data.pokemon) {
        const {
          data,
        }: {
          data: {
            id: number
            types: { type: genericPokemonType }[]
            sprites: { front_default: string }
          }
        } = await axios.get(pokemon.pokemon.url)
        const types = data.types.map(type => {
          return type.type.name
        })
        pokemonsData.push({
          name: pokemon.pokemon.name,
          id: data.id,
          image: data.sprites.front_default,
          types,
        })
      }
      return pokemonsData
    } catch (err) {
      console.log(err)
    }
  },
)
