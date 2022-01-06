import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.container}>
    <h1>SaFe Travel.</h1>

    <nav>
      <ul className={styles.navigation}>
        <li>Discover</li>
        <li>Special Deals</li>
        <li>Community</li>
        <li>About us</li>
      </ul>

      <div className={styles['action-buttons']}>
        <button type="button" className={styles['button-sign-in']}>
          Sign In
        </button>
        <button type="button" className={styles['button-register']}>
          Register
        </button>
      </div>
    </nav>
  </header>
)
