import React from 'react'
import styles from './navbar.module.css'
function Navbar() {
  return (
    <header className={styles.navbar}>
        <div className="logo">
            Untitled UI
        </div>
        <div>
            <ul  className={styles.links}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Home</a></li>
            </ul>
        </div>
        <div className="handlers">
            <button>Login</button>
            <button>Signup </button>
        </div>
    </header>
  )
}

export default Navbar