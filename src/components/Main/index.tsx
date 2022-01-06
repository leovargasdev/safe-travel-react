import { useState } from 'react'
import styles from './styles.module.scss'

export const Main = () => {
  const [activeButton, setActiveButton] = useState<'first' | 'second'>('first')

  return (
    <main className={styles.container}>
      <h1>
        Travel to <br />
        San Francisco <br />
        Safely.
      </h1>
      <h2>
        Full arranged VIP San Francisco travel
        <br />
        according to your schedule.
      </h2>

      <div
        className={`${styles.buttons} ${
          activeButton === 'first' && styles['active-first']
        }`}
      >
        <button
          type="button"
          className={`${styles['btn-first']} ${
            activeButton === 'first' && styles.active
          }`}
          onClick={() => setActiveButton('first')}
        >
          One call
          <br />
          All you need
        </button>
        <button
          type="button"
          className={`${styles['btn-second']} ${
            activeButton === 'second' && styles.active
          }`}
          onClick={() => setActiveButton('second')}
        >
          Call Now
          <br />
          444-44-44
        </button>
      </div>
    </main>
  )
}
