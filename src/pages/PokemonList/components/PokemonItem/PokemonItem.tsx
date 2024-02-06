import type { FC } from "react"
import styles from "./PokemonItem.module.scss"
import type { generatedPokemonType } from "../../../../utils/types"
import { useNavigate } from "react-router-dom"

interface PokemonItemProps {
  pokemon: generatedPokemonType
}

const PokemonItem: FC<PokemonItemProps> = ({ pokemon }) => {
  // const location = useLocation()
  const navigate = useNavigate()
  return (
    <div
      className={styles.pokemonCard}
      onClick={() => navigate(`/pokemon/${pokemon.id}`)}
    >
      <img src={pokemon.image} alt={pokemon.name} className={styles.image} />
      <p>
        Name: <strong>{pokemon.name}</strong>
      </p>
      <div className={styles.pokemonTypeContainer}>
        <p>Type:</p>
        {pokemon.types.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  )
}

export default PokemonItem
