import { useParams } from "react-router-dom"
import type { PokemonsItem } from "../Home/components/@types"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./PokemonDetails.module.scss"
import Loading from "../../componemts/Loading/Loading"

const PokemonDetails = () => {
  const { id: pokemonId } = useParams()
  const [pokemon, setPokemon] = useState<PokemonsItem>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemon = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => {
          setPokemon({
            name: response.data.name,
            types: response.data.types,
            image: response.data.sprites.front_default,
            moves: response.data.moves,
          })
        })
      setIsLoading(false)
    }
    fetchPokemon()
  }, [pokemonId])

  return isLoading ? (
    <Loading />
  ) : (
    <div className={styles.itemContainer}>
      <h1>{pokemon?.name}</h1>
      <img
        src={pokemon?.image}
        alt={pokemon?.name}
        className={styles.itemImage}
      />
      <div className={styles.descriptionContainer}>
        <div className={styles.itemSection}>
          <h2>Вміння:</h2>
          <ul>
            {pokemon?.moves?.map((ability, index) => (
              <li key={index}>{ability.move.name}</li>
            ))}
          </ul>
        </div>
        <div className={styles.itemSection}>
          <h2>Типи:</h2>
          <ul>
            {pokemon?.types.map((type, index) => (
              <li key={index}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails
