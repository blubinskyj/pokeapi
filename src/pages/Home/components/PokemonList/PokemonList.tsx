import { useEffect } from "react"
import PokemonItem from "../PokemonItem/PokemonItem"
import styles from "./PokemonList.module.scss"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { fetchData } from "../../../../features/pokemons/pokemonsSlice"

const PokemonList = () => {
  const dispatch = useAppDispatch()
  const { results } = useAppSelector((state: RootState) => state.pokemons)

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div className={styles.pokemonListContainer}>
      {results.map(pokemon => (
        <PokemonItem key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  )
}

export default PokemonList
