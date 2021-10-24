import '../styles/globals.css';
import {SessionProvider} from 'next-auth/react'
import { RecoilRoot } from 'recoil';

//const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

function MyApp ({ Component, pageProps:{session,...pageProps} }) {
  return(


    <SessionProvider session={session}>
   <RecoilRoot> 
      <Component {...pageProps} />
      </RecoilRoot>
  
    </SessionProvider>
   
  )
   

  } 

export default MyApp
