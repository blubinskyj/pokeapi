import { useAppDispatch, useAppSelector } from "./app/hooks"
import { useEffect } from "react"
import { getInitialPokemonData } from "./app/reducers/getInitialPokemonData"
import { getPokemonData } from "./app/reducers/getPokemonData"

const App = () => {
  const dispatch = useAppDispatch()
  const { allPokemon } = useAppSelector(state => state.pokemon)
  useEffect(() => {
    dispatch(getInitialPokemonData())
  }, [dispatch])

  useEffect(() => {
    if (allPokemon) {
      const clonedPokemon = [...allPokemon]
      const pokemonList = clonedPokemon.slice(0, 20)
      dispatch(getPokemonData(pokemonList))
    }
  }, [allPokemon, dispatch])

  return <div>App</div>
}

export default App
