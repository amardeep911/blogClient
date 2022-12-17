import React from 'react'
import styles from './welcome.module.css'
const Welcome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <button className={styles.logOut}>LogOut</button>
        <div className={styles.heading}>
          <h1 className={styles.title}>Welcome</h1>
          <h1 className={styles.name}>Amardeep Ranjan</h1>

        </div>
      </div>
    </div>
  )
}

export default Welcome