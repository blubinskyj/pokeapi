import styles from "./PokemonItem.module.scss"
import type { FC } from "react"
import { Link } from "react-router-dom"

interface PokemonItemProps {
  name: string
}

const PokemonItem: FC<PokemonItemProps> = ({ name }) => {
  return (
    <div className={styles.pokemonCard}>
      <Link to={`pokemon/${name}`}>
        <h2>Pokemon ID</h2>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Type:</strong> Pokemon type
        </p>
      </Link>
    </div>
  )
}

export default PokemonItem
