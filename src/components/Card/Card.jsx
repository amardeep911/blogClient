import React from 'react'
import styles from '../Card/card.module.css'
import pic1 from '../../assets/images/pic1.png'

function Card() {
  return (
    <div className={styles.container}>
    <div className={styles.left}> 
    <div className={styles.username}>Leonardo De La Rocha</div>
    <div className={styles.title}>Inclusive Design for the 2023 Lunar New Year</div>
    <div className={styles.content}>It's that time of the year again. Lunar New Year. A time to forge ahead, a time for renewal, and to usher in good fortune. A time to… Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sit itaque praesentium sint iure laudantium molestias quo quaerat dignissimos autem voluptas perspiciatis, aperiam quibusdam nulla repudiandae ab maxime. Eligendi harum nulla vero sed amet quo! Illum vero, magni a eaque velit praesentium architecto mollitia. Mollitia voluptates rem ea aut voluptatum.</div>
    <div className={styles.footer}>Feb 7, 2016</div>
    </div>
    <div className={styles.right}>
      <img src={pic1} alt="Image not rendered" />
    </div>
    </div>
  )
}

export default Card