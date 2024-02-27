import { FC } from "react"
import styles from './styles.module.scss'

const Skeleton: FC = () => {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 24 }}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 24 }}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 24 }}></div>
      </div>

      <div className={styles.row}>
        <div className={styles.col} style={{ height: 300 }}></div>
        <div className={styles.col} style={{ height: 300 }}></div>
      </div>

      <div className={styles.row}>
        <div className={styles.col} style={{ height: 24 }}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.col} style={{ height: 24 }}></div>
      </div>
    </div>
  )
}


export default Skeleton