import Head from 'next/head'
import Header from '../components/Header';
const prefix = process.env. NEXT_PUBLIC_BASE_PATH || '';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Snoopy</title>
        <link rel="shortcut icon" href={prefix + "/favicon.ico"} />
      </Head>

{/* Header */}
<Header/>

{/* Feed*/}
{/* Modal */}
    </div>
  )
}
