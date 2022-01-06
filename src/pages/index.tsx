import Head from 'next/head'

import { Main } from 'components/Main'
import { Header } from 'components/Header'
import { Background } from 'components/Background'

import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>SaFe Travel</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <Main />
      </div>
      <Background />
    </>
  )
}
