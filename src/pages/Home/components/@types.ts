export interface Pokemon {
  name: string
  url: string
}

export interface PokemonsState {
  count: number
  next: string | null
  previous: string | null
  results: Pokemon[]
}

export const initialState: PokemonsState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
}

export interface PokemonsItem {
  name: string
  types: PokemonTypes
  image: string
  moves?: PokemonMoves
}

export type PokemonMoves = [
  {
    move: {
      name: string
    }
  },
]

export type PokemonTypes = [
  {
    slot: number
    type: {
      name: string
      url: string
    }
  },
]
