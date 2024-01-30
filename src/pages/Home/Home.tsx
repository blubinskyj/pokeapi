import Search from "../../componemts/Search/Search"
import Filter from "../../componemts/Filter/Filter"
import styles from "./Home.module.scss"

const Home = () => {
  return (
    <div>
      <filter className={styles.filterContainer}>
        <Search />
        <Filter />
      </filter>
      home
    </div>
  )
}

export default Home
