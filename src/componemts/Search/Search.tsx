import type { FC } from "react"
import { useState } from "react"
import styles from "./Search.module.scss"
import type { SearchProps } from "./@types"

const Search: FC<SearchProps> = ({ getQuery }) => {
  const [text, setText] = useState("")

  const onChange = (value: string) => {
    setText(value)
    getQuery(value)
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={text}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default Search
