import { Link } from "react-router-dom"
import styles from "./NotFound.module.scss"

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

export default NotFound
