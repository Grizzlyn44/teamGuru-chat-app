import type { NextPage } from "next"
import Head from "next/head"
import styles from "styles/components/Home/Home.module.scss"
import { signIn, signOut, useSession } from "next-auth/client"
import { Button } from "antd"
import SvgIcon from 'components/Core/SvgIcon/SvgIcon'

const loginButtonDivStyles = (condition: boolean, marginTopValue: string) => {
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

  const marginTopValue = "2rem"
  const showLoginButtonDiv = !loading && !session
  const showLogoutButtonDiv = !loading && !!session
  const headingIconDimensions = 6
  const loginContent = <Button onClick={() => signIn()}>Log In</Button>
  const logoutContent = (
    <div className={styles.logoutInner}>
      <p>Logged as <b>{session?.user?.email}</b></p>
      <Button onClick={() => signOut()}>Log Out</Button>
    </div>
  )

  const loadingDivStyles = {
    marginTop: loading ? marginTopValue : '0rem',
    opacity: loading ? '1' : '0',
    maxHeight: loading? '3rem' : '0',
    pointerEvent: loading ? 'auto' : 'none'
  }
  

  return (
    <div className={styles.container}>

      <Head>
        <title>Team guru - UI UX SKVOST</title>
        <meta name="description" content="Team guru - UI UX SKVOST" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <SvgIcon icon={icons => icons.messages} width={headingIconDimensions} height={headingIconDimensions} />
        <div className={styles.loadingBar} style={loadingDivStyles} />

        <div className={styles.loginContent} style={loginButtonDivStyles(showLoginButtonDiv, marginTopValue)}>{loginContent}</div>
        <div className={styles.loginContent} style={loginButtonDivStyles(showLogoutButtonDiv, marginTopValue)}>{logoutContent}</div>

      </main>
    </div>
  )
}

export default Home
