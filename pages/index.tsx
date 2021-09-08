import type { NextPage } from "next"
import Head from "next/head"
import styles from "styles/components/Home/Home.module.scss"
import { signIn, signOut, useSession } from "next-auth/client"
import { Button } from "antd"
import SvgIcon from 'components/Core/SvgIcon/SvgIcon'
import { useEffect, useState } from "react"

const loadingScreenDivStyles = (condition: boolean, marginTopValue: string) => {
  return {
    transform: `scale(${ condition ? '1' : '0' })`,
    opacity: condition ? '1' : '0',
    maxHeight: condition ? '3rem' : '0',
    marginTop: condition ? marginTopValue : '0',
    top: condition ? '0' : '-1rem',
    pointerEvent: condition ? 'auto' : 'none'
  }
}

const Home: NextPage = () => {

  const [session, loading] = useSession()
  const [loadingData, setLoadingData] = useState(false)

  const marginTopValue = "2rem"
  const showLoginButtonDiv = !loading && !session
  const showLogoutButtonDiv = !loading && !!session

  const showLoadingBar = loading || loadingData

  const headingIconDimensions = 6
  const loginContent = <Button onClick={() => signIn()}>Log In</Button>
  const logoutContent = (
    <div className={styles.logoutInner}>
      <p>Welcome back <b>{session?.user?.name}</b>, please wait</p>
    </div>
  )

  const loadingDivStyles = {
    marginTop: showLoadingBar ? marginTopValue : '0rem',
    opacity: showLoadingBar ? '1' : '0',
    maxHeight: showLoadingBar? '3rem' : '0',
    pointerEvent: showLoadingBar ? 'auto' : 'none'
  }

  const svgProps = {
    className: styles.svgBreathe
  }

  useEffect( () => {

    const getAllData = async () => {
      const profileData = await fetch("http://localhost:3000/api/profile/me").then( async (res) => {
        if(res.ok) {
          return await res.json()
        }
        throw "Error"
      })
    }

    if(!loading && !!session) {
      setLoadingData(true)

      getAllData()
    }
  }, [loading, session])
  

  return (
    <div className={styles.container}>

      <Head>
        <title>Team guru - UI UX SKVOST</title>
        <meta name="description" content="Team guru - UI UX SKVOST" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <SvgIcon icon={icons => icons.messages(svgProps)} width={headingIconDimensions} height={headingIconDimensions} />
        <div className={styles.loadingBar} style={loadingDivStyles} />

        <div className={styles.loginContent} style={loadingScreenDivStyles(showLoginButtonDiv, marginTopValue)}>{loginContent}</div>
        <div className={styles.loginContent} style={loadingScreenDivStyles(showLogoutButtonDiv, marginTopValue)}>{logoutContent}</div>

      </main>
    </div>
  )
}

export default Home
