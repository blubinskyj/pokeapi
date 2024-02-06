export interface AppTypeInitialState {
  isLoading: boolean
  page: number
}

export interface PokemonInitialStateType {
  allPokemon: undefined | genericPokemonType[]
  pokemonList: generatedPokemonType[] | undefined
  currentPokemon: undefined | currentPokemonType
}

export interface genericPokemonType {
  name: string
  url: string
}

export interface generatedPokemonType {
  name: string
  id: number
  image: string
  types: string[]
}

export interface currentPokemonType {
  id: number
  name: string
  types: string[]
  image: string
  moves: string[]
}

export interface pokemonStatsType {
  name: string
  value: string
}

export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance"

export type pokemonElementType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water"
