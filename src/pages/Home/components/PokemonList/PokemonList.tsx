import { useEffect, useState } from "react"
import axios from "axios"
import PokemonItem from "../PokemonItem/PokemonItem"
import type { Pokemon, PokemonsItem, PokemonsState } from "../@types"
import { initialState } from "../@types"

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonsState>(initialState)
  const [pokemons, setPokemons] = useState<PokemonsItem[]>([])

  const fetchPokemons = async (pokemon: Pokemon) => {
    let url = pokemon.url
    try {
      const response = await axios.get(url)
      setPokemons(oldArray => [
        ...oldArray,
        {
          name: response.data.name,
          types: response.data.types,
          image: response.data.sprites.front_default,
        },
      ])
    } catch (error: any) {
      console.error("Error fetching data:", error.message)
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0",
      )
      setPokemonList(response.data)
    } catch (error: any) {
      console.error("Error fetching data:", error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    pokemonList.results.map(item => {
      fetchPokemons(item)
    })
  }, [pokemonList])

  console.log(pokemons, "pokemons")

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <PokemonItem
          name={pokemon.name}
          types={pokemon.types}
          image={pokemon.image}
          key={index}
        />
      ))}
    </div>
  )
}

export default PokemonList
