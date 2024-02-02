import type { Pokemon } from "../@types"

export type PokemonsItemProps = {
  pokemon: Pokemon
}

export type pokemonTypes = [
  {
    slot: string
    type: { name: string; url: string }
  },
]
