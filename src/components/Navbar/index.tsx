import styles from './styles.module.scss'

export const Navbar = () => (
  <div className={styles.container}>
    <h1>SaFe Travel.</h1>

    <nav className={styles.navigation}>
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
  </div>
)
