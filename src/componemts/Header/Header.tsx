import styles from "./Header.module.scss"
import { Outlet } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          Pokemon API
        </a>
        <div className={styles.headerRight}>
          <a href="/" className={styles.active}>
            Home
          </a>
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default Header
