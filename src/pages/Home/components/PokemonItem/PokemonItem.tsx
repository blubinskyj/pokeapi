import styles from "./PokemonItem.module.scss"
import type { FC } from "react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import type { PokemonsItemProps, pokemonTypes } from "./@types"

const PokemonItem: FC<PokemonsItemProps> = ({ pokemon }) => {
  const [pokemonId, setPokemonId] = useState("")
  const [pokemonTypes, setPokemonTypes] = useState<pokemonTypes>()
  const [imagePokemon, setImagePokemon] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const loadIdPokemon = async () => {
      await axios.get(pokemon.url).then(response => {
        setPokemonId(response.data.id)
        setPokemonTypes(response.data.types)
        setImagePokemon(response.data.sprites.front_default)
      })
    }
    loadIdPokemon()
    setIsLoading(false)
  }, [pokemon.url, pokemonId])

  return (
    <div className={styles.pokemonCard}>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <Link to={`pokemon/${pokemonId}`}>
          <img src={imagePokemon} alt={pokemon.name} className={styles.image} />
          <p>
            Name: <strong>{pokemon.name}</strong>
          </p>
          <div className={styles.pokemonTypeContainer}>
            <p>Type:</p>
            {pokemonTypes?.map((item, index) => (
              <p key={index}>{item.type.name}</p>
            ))}
          </div>
        </Link>
      )}
    </div>
  )
}

export default PokemonItem
