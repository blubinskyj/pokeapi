import type { FC } from "react"
import styles from "./Pagination.module.scss"

interface PaginationProps {
  handlePageChange: (page: number) => void
  page: number
}

const Pagination: FC<PaginationProps> = ({ handlePageChange, page }) => {
  return (
    <div className={styles.paginationContainer}>
      <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
    </div>
  )
}

export default Pagination
