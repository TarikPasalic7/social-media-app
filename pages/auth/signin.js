import { getProviders, signIn} from 'next-auth/react'
import Footer from '../../components/Footer'

import Header from '../../components/Header'
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function SignIn ({ providers }) {
  return (
    <>
    <Header/>
    <div className="flex flex-col items-center justify-center min-h-screen 
    py-2 xl:-mt-36   px-14 text-center ">
        <img className="w-50  h-40" src={prefix+ "/snoopy-lg.png"} />
        <p className="font-xs italic mt-5">  This is a social media app</p>

    <div className="mt-40" >{Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-3  rounded-lg text-white bg-blue-700" onClick={() =>signIn(provider.id, {callbackUrl: '/'})}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}</div>
      </div>
      <Footer/>
    </>
  )
}
/*
// This is the recommended way for Next.js 9.3 or newer

// If older than Next.js 9.3
SignIn.getInitialProps = async () => {
    return {
      providers: await getProviders()
    }
  }
*/
export async function getServerSideProps (context) {
  const providers = await getProviders()

  return {
    props: { providers }
  }
}
