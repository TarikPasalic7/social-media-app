import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react'
//const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

function MyApp ({ Component, pageProps:{session,...pageProps} }) {
  return(


    <SessionProvider session={session}>

    <Component {...pageProps} />
    </SessionProvider>
   
  )
   

  } 

export default MyApp
