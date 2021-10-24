import type { NextPage } from "next"
import Head from "next/head"
import styles from "styles/components/Home/Home.module.scss"
import { signIn, signOut, useSession, getSession } from "next-auth/client"
import {Session as NextAuthSession} from "next-auth"
import { Button } from "antd"
import SvgIcon from 'components/Core/SvgIcon/SvgIcon'
import { ChangeEvent, useEffect, useState } from "react"
import { Input, Space } from 'antd';
import Router from 'next/router'
// import { apiUpdateUser } from "pages/api/user/index"
import { LoadingOutlined } from '@ant-design/icons';

const loadingScreenDivStyles = (condition: boolean, marginTopValue: string) : any  => {
  return {
    transform: `scale(${ condition ? '1' : '.85' })`,
    opacity: condition ? '1' : '0',
    maxHeight: condition ? '3rem' : '0',
    marginTop: condition ? marginTopValue : '0',
    top: condition ? '0' : '-1rem',
    pointerEvents: condition ? 'auto' : 'none'
  }
}

interface Session extends NextAuthSession {
  isNewUser: boolean;
}

const Home: NextPage = (props: any) => {

  const [session, loading] = useSession()
  const [loadingData, setLoadingData] = useState(false)
  const [isNewUser, setIsNewUser] = useState(false)
  const [usernameValue, setUsernameValue] = useState("")
  const [usernameLoading, setUsernameLoading] = useState(false)

  const { Search } = Input;

  const marginTopValue = "2rem"
  const showLoginButtonDiv = !loading && !session && !loadingData
  const showLogoutButtonDiv = !loading && !!session

  const showLoadingBar = loading || loadingData

  const headingIconDimensions = 6
  const loginContent = <Button onClick={() => signIn()}>Log In</Button>

  const setUsernameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const stringValue = event.target.value
    setUsernameValue(stringValue)
  }

  const apiUpdateUser = async (updateObject: object) => {

    const apiRouteRoot = "user"
    const { NEXT_PUBLIC_WEB_ROOT_URL } = process.env

    console.log("0", process.env)

    if(!NEXT_PUBLIC_WEB_ROOT_URL) throw new Error("NEXT_PUBLIC_WEB_ROOT_URL ENV is missing")

    console.log("1")

    // const bodyData:IBody = { user }

    return await fetch(`${NEXT_PUBLIC_WEB_ROOT_URL}/api/${apiRouteRoot}`, {
        method: "POST",
        body: JSON.stringify(updateObject)
    })
  }

  const onSetHandler = async () => {
    setUsernameLoading(true)
    console.log("process.env", process)

    const updateUserObject = {
      username: usernameValue,
      isNewUser: false
    }

    const response = await apiUpdateUser(updateUserObject)

    if(response.ok) {
      Router.reload()
    }
  }

  const logoutContent = (
    <div className={styles.logoutInner}>
      {
        !isNewUser 
          ? <>
              <p>Welcome back <b>{session?.user?.name}</b>, please wait</p>
              <Button style={{ margin: '0 auto', display: 'flex', marginTop: '1rem' }} onClick={() => signOut()}>Sign out instead</Button>
            </>
          : (
            <div>
              <p style={{textAlign: 'center', marginBottom: '2rem'}}>Set your <span style={{ fontWeight: 600, color: '#43a1fe' }}>username</span></p>
              <div>
              <Search
                placeholder="Set your username"
                allowClear
                enterButton={ usernameLoading ? <LoadingOutlined /> : "Set"}
                disabled={usernameLoading}
                size="large"
                value={ usernameValue }
                onChange={ setUsernameHandler }
                spellCheck={false}
                onSearch={() => onSetHandler()}
              />
              <br />
              <Button style={{ margin: '0 auto', display: 'flex', marginTop: '1rem' }} onClick={() => signOut()}>Sign out instead</Button>
              </div>
            </div>
            )
      }
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

  const loadData = async () => {
    /*
    ...
    */

    setLoadingData(false)
  }

  useEffect( () => {

    if(!loading && !!session) {
      setLoadingData(true)
      
      const isNewUser = session?.user?.isNewUser

      console.log("isNewUser", isNewUser)
      
      if(isNewUser) {
        setIsNewUser(true);
        setUsernameValue(session?.user?.name)
        setLoadingData(false);
      } else {
        setIsNewUser(false);
        loadData()
      }
    }
    console.log("?")

    if(!!session && !isNewUser) {
      setTimeout( () => {
        Router.push("/home")
      }, 3500)
    }

  }, [loading, session])

  console.log("session", session)

  return (
    <div className={styles.container}>

      <Head>
        <title>Team guru - UI UX SKVOST #1</title>
        <meta name="description" content="Team guru - UI UX SKVOST #1" />
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
