import type { FC } from "react"
import type { FilterProps } from "./@types"

const Filter: FC<FilterProps> = ({ filter, changeFilter, types }) => {
  return (
    <div>
      <label htmlFor="selType">
        <span>Pokemon Type: </span>
        <select
          data-testid="filter-type"
          className="select-box margin-left"
          name="selType"
          id="selType"
          value={filter}
          onChange={e => changeFilter(e.target.value)}
        >
          {types?.map(item => (
            <option key={item.url} value={item.name}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}

export default Filter
