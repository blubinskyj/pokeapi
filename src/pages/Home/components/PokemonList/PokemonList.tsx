import { useEffect, useState } from "react"
import axios from "axios"
import PokemonItem from "../PokemonItem/PokemonItem"
import type { PokemonsState } from "../@types"
import { initialState } from "../@types"
import Search from "../../../../componemts/Search/Search"
import { Pagination } from "@mui/material"

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<PokemonsState>(initialState)
  const [pokemonPerPage] = useState(15)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentOffset, setCurrentOffset] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const totalPage = Math.ceil(pokemonList.count / pokemonPerPage)

  useEffect(() => {
    const fetchPokemons = async () => {
      await axios
        .get(
          `https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${currentOffset}`,
        )
        .then(response => {
          setPokemonList(response.data)
        })
      setIsLoading(false)
    }
    fetchPokemons()
  }, [currentPage, pokemonPerPage])

  const handleChange = (e: any, p: number) => {
    setCurrentPage(p)
    setCurrentOffset(p * pokemonPerPage - pokemonPerPage)
  }

  const renderPokemonsList = () => {
    const pokemonsList: any[] = []

    pokemonList.results.forEach(pokemon => {
      if (!pokemon.name.includes(searchQuery)) {
        return
      }

      pokemonsList.push(<PokemonItem key={pokemon.name} pokemon={pokemon} />)
    })
    return pokemonsList
  }

  return isLoading ? (
    <h2>Loading</h2>
  ) : (
    <div>
      <Pagination
        count={totalPage}
        size="large"
        page={currentPage}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
      <Search getQuery={q => setSearchQuery(q)} />
      {/*<Filter filter={filter} changeFilter={handleChangeFilter} types={types} />*/}
      {renderPokemonsList()}
    </div>
  )
}

export default PokemonList
