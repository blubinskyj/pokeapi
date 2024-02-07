import type { FC } from "react"
import { useState } from "react"
import styles from "./Search.module.scss"
interface SearchProps {
  getPokemon: (value: string) => void
}

const Search: FC<SearchProps> = ({ getPokemon }) => {
  const [search, setSearch] = useState("")
  return (
    <div className={styles.searchContainer}>
      <div>
        <input
          type="text"
          placeholder={"Search"}
          onChange={e => setSearch(e.target.value)}
          className={styles.input}
        />
      </div>
      <button onClick={() => getPokemon(search)}>Search</button>
    </div>
  )
}

export default Search
