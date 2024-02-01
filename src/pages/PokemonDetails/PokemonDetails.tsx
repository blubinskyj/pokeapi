import { useParams } from "react-router-dom"
import type { PokemonsItem } from "../Home/components/@types"
import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./PokemonDetails.module.scss"
import Loading from "../../componemts/Loading/Loading"

const PokemonDetails = () => {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState<PokemonsItem>()
  const [isLoading, setIsLoading] = useState(false)

  const fetchPokemons = async (pokemonName: string) => {
    setIsLoading(true)
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
      )
      setPokemon({
        name: response.data.name,
        types: response.data.types,
        image: response.data.sprites.front_default,
        moves: response.data.moves,
      })
      setIsLoading(false)
    } catch (error: any) {
      console.error("Error fetching data:", error.message)
    }
  }

  useEffect(() => {
    if (name) {
      fetchPokemons(name)
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={styles.itemContainer}>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.image} alt={name} className={styles.itemImage} />
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
