import { useState } from 'react'
import styles from './styles.module.scss'

export const Navbar = () => {
  const [activeNavigationMobile, setActiveNavigationMobile] = useState(false)

  return (
    <div className={styles.container}>
      <h1>SaFe Travel.</h1>

      <nav
        className={`${styles.navigation} ${
          activeNavigationMobile ? styles.active : ''
        }`}
      >
        <ul>
          <li>Discover</li>
          <li>Special Deals</li>
          <li>Community</li>
          <li>About us</li>
        </ul>

        <div className={styles['content-buttons']}>
          <button type="button" className={styles['button-sign-in']}>
            Sign In
          </button>
          <button type="button" className={styles['button-register']}>
            Register
          </button>
        </div>
      </nav>

      <button
        type="button"
        className={`${styles['button-mobile']} ${
          activeNavigationMobile ? styles['button-active'] : ''
        }`}
        onClick={() => setActiveNavigationMobile(state => !state)}
      >
        <span />
        <span />
      </button>
    </div>
  )
}
