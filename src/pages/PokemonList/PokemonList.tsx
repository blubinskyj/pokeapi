import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getInitialPokemonData } from "../../app/reducers/getInitialPokemonData"
import { getPokemonData } from "../../app/reducers/getPokemonData"
import PokemonItem from "./components/PokemonItem/PokemonItem"
import { useNavigate, useSearchParams } from "react-router-dom"
import Search from "../../components/Search/Search"
import styles from "./PokemonList.module.scss"
import { setLoading, setPage } from "../../app/slices/AppSlice"
import Pagination from "../../components/Pagination/Pagination"
import { getInitialTypeData } from "../../app/reducers/getInitialTypeData"
import Filter from "../../components/Filter/Filter"
import { setFilter } from "../../app/slices/PokemonSlice"
import { getTypeData } from "../../app/reducers/getTypeData"

const PokemonList = () => {
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const { allPokemon, pokemonList, allTypes, filter } = useAppSelector(
    state => state.pokemon,
  )
  const { isLoading, page } = useAppSelector(state => state.app)

  useEffect(() => {
    dispatch(getInitialPokemonData())
    dispatch(getInitialTypeData())
  }, [dispatch])

  useEffect(() => {
    if (filter && filter !== "All") {
      let selected = allTypes?.find(type => type.name === filter)
      if (selected) {
        dispatch(getTypeData(selected))
      }
    } else {
      const begin = (page - 1) * 20
      const end = begin + 20
      if (allPokemon) {
        const clonedPokemon = [...allPokemon]
        const pokemonList = clonedPokemon.slice(begin, end)
        dispatch(getPokemonData(pokemonList))
        dispatch(setLoading(false))
      }
    }
  }, [allPokemon, dispatch, page, filter, allTypes])

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemon = allPokemon?.filter(
        pokemon => pokemon.name === value.toLowerCase(),
      )
      if (pokemon?.length) {
        navigate(`/pokemon/${pokemon[0].name}`)
      } else {
        alert("pokemon not found")
      }
    } else {
      alert("pokemon not found")
    }
  }

  useEffect(() => {
    const page = parseInt(searchParams?.get("page")!, 10) || 1
    dispatch(setPage(page))
  }, [searchParams, dispatch])

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() })
    dispatch(setPage(newPage))
  }

  const handleFilterChange = (type: string) => {
    dispatch(setFilter(type))
  }

  return (
    <div className={styles.listContainer}>
      <div>
        <Filter types={allTypes} handleSelect={handleFilterChange} />
        <Search getPokemon={getPokemon}></Search>
        {!(filter && filter !== "All") && (
          <Pagination page={page} handlePageChange={handlePageChange} />
        )}

        {!isLoading ? (
          <div>
            {pokemonList &&
              pokemonList.length > 0 &&
              pokemonList.map(pokemon => (
                <PokemonItem pokemon={pokemon} key={pokemon.id} />
              ))}
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    </div>
  )
}

export default PokemonList
