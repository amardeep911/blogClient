import React from 'react'
import styles from '../Card/card.module.css'

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.inner1}>
      <div className={styles.images}>
        <img src="src/assets/images/women.jpg" alt="image not found" className={styles.photo}/>
        <div className={styles.overlay}>
          <div className={styles.text}>
            <p>Amardeep Ranjan</p>
            <p>29 June, 2003</p>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        UX preview presentation
      </div>
      <div className={styles.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto sint a. Pariatur provident dicta aut ratione optio voluptatum repudiandae quaerat esse! Asperiores alias quam eligendi libero ipsum, vel tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita perspiciatis officiis totam labore itaque corporis!
      </div>
      <div className={styles.link}>
        Read Post
      </div>
      </div>
    </div>
  )
}

export default Card