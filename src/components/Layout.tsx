import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
// import { usePromiseTracker } from "react-promise-tracker"

// loading
// import LoadingSmall from "./LoadingSmall"

const Layout = ({ children }) => {
  // const { promiseInProgress } = usePromiseTracker()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>newProject</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#fffff" />
      </Head>
      <body>
        {children}
        {/* {promiseInProgress === true ? <LoadingSmall /> : ""} */}
      </body>
    </>
  )
}

export default Layout
