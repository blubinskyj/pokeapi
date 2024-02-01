import PokemonList from "./components/PokemonList/PokemonList"
import styles from "./Home.module.scss"
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <PokemonList />
    </div>
  )
}

export default Home
