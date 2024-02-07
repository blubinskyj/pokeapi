import type { FC } from "react"
import type { genericPokemonType } from "../../utils/types"
import styles from "./Filter.module.scss"
import { useAppSelector } from "../../app/hooks"

interface FilterProps {
  types: genericPokemonType[] | undefined
  handleSelect: (type: string) => void
}

const Filter: FC<FilterProps> = ({ types, handleSelect }) => {
  const { filter } = useAppSelector(state => state.pokemon)
  return (
    <div>
      <select
        name="typeSort"
        value={filter}
        id="typeSort"
        className={styles.select}
        onChange={e => handleSelect(e.target.value)}
      >
        <option value={undefined}>All</option>
        {types?.map(type => (
          <option key={type.name} value={type.name}>
            {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
