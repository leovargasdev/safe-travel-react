import { useState } from 'react'
import styles from './styles.module.scss'

type TypesButton = 'first' | 'second'

export const Main = () => {
  const [buttonSelected, setButtonSelected] = useState<TypesButton>('first')

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

      <div className={`${styles.buttons} ${styles[buttonSelected]}`}>
        <button
          type="button"
          onClick={() => setButtonSelected('first')}
          className={buttonSelected === 'first' && styles.active}
        >
          One call
          <br />
          All you need
        </button>
        <button
          type="button"
          onClick={() => setButtonSelected('second')}
          className={buttonSelected === 'second' && styles.active}
        >
          Call Now
          <br />
          444-44-44
        </button>
      </div>
    </main>
  )
}
