import Head from "next/head"
import { AppProps } from "next/app"
import "../styles/index.css"
import "../styles/custom-slider.css"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>USUM Project</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
