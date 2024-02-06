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

const PokemonList = () => {
  const navigate = useNavigate()
  let [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const { allPokemon, pokemonList } = useAppSelector(state => state.pokemon)
  const { isLoading, page } = useAppSelector(state => state.app)

  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    const begin = (page - 1) * 20
    const end = begin + 20
    if (allPokemon) {
      const clonedPokemon = [...allPokemon]
      const pokemonList = clonedPokemon.slice(begin, end)
      dispatch(getPokemonData(pokemonList))
      dispatch(setLoading(false))
    }
  }, [allPokemon, dispatch, page])

  const getPokemon = async (value: string) => {
    if (value.length) {
      const pokemon = allPokemon?.filter(
        pokemon => pokemon.name === value.toLowerCase(),
      )
      if (pokemon?.length) {
        navigate(`/pokemon/${pokemon[0].name}`)
      } else {
        console.log("pokemon not found")
      }
    } else {
      console.log("pokemon not found")
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

  return (
    <div className={styles.listContainer}>
      <div>
        <Search getPokemon={getPokemon}></Search>
        <Pagination page={page} handlePageChange={handlePageChange} />
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
