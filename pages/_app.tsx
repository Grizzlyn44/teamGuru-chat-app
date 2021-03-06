import 'antd/dist/antd.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    )
}
export default MyApp
