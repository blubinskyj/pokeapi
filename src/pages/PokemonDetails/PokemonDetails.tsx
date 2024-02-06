import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./PokemonDetails.module.scss"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { pokemonRoute } from "../../utils/constants"
import { setCurrentPokemon } from "../../app/slices/PokemonSlice"

const PokemonDetails = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const [isDataLoading, setIsDataLoading] = useState(true)
  const currentPokemon = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon,
  )

  const getPokemonInfo = useCallback(async () => {
    const { data } = await axios.get(`${pokemonRoute}/${params.id}`)
    dispatch(
      setCurrentPokemon({
        id: data.id,
        name: data.name,
        types: data.types.map(
          (type: { type: { name: string } }) => type.type.name,
        ),
        image: data.sprites.front_default,
        moves: data.moves.map(
          (move: { move: { name: string } }) => move.move.name,
        ),
      }),
    )
    setIsDataLoading(false)
  }, [params.id, dispatch])

  useEffect(() => {
    getPokemonInfo()
  }, [params.id, getPokemonInfo])

  return (
    <>
      {!isDataLoading && currentPokemon ? (
        <div className={styles.itemContainer}>
          <h1>{currentPokemon?.name}</h1>
          <img
            src={currentPokemon?.image}
            alt={currentPokemon?.name}
            className={styles.itemImage}
          />
          <div className={styles.descriptionContainer}>
            <div className={styles.itemSection}>
              <h2>Type:</h2>
              <ul>
                {currentPokemon?.types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
            <div className={styles.itemSection}>
              <h2>Moves:</h2>
              <ul>
                {currentPokemon?.moves.map((move, index) => (
                  <li key={index}>{move}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default PokemonDetails
