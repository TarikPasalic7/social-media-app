import Head from 'next/head'
import Feed from '../components/Feed';
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
<Feed/>
{/* Modal */}
    </div>
  )
}
