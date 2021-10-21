import '../styles/globals.css'
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''

function MyApp ({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
