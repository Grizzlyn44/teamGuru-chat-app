import type { NextPage } from 'next'
import Head from 'next/head'
import styles from "styles/Home.module.scss"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Team guru - UI UX SKVOST</title>
        <meta name="description" content="Team guru - UI UX SKVOST" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          chat-app <a href="#">TEAM GURU</a>
        </h1>

        <p>Init</p>

      </main>
    </div>
  )
}

export default Home
