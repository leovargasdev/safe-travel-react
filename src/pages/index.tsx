import Head from 'next/head'

import { Main } from 'components/Main'
import { Navbar } from 'components/Navbar'
import { Background } from 'components/Background'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Boilerplate</title>
      </Head>
      <div className={styles.container}>
        <Navbar />
        <Main />
      </div>
      <Background />
    </div>
  )
}
