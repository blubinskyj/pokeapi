import styles from "./PokemonItem.module.scss"
import type { FC } from "react"
import { Link } from "react-router-dom"
import type { PokemonsItem } from "../@types"

const PokemonItem: FC<PokemonsItem> = ({ name, types, image }) => {
  return (
    <div className={styles.pokemonCard}>
      <Link to={`pokemon/${name}`}>
        <img src={image} alt={name} className={styles.image} />
        <p>
          Name: <strong>{name}</strong>
        </p>
        <div className={styles.pokemonTypeContainer}>
          <p>Type:</p>
          {types.map((item, index) => (
            <p key={index}>{item.type.name}</p>
          ))}
        </div>
      </Link>
    </div>
  )
}

export default PokemonItem
