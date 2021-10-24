import Head from 'next/head'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
export default function Home () {
  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
      <Head>
        <title>Snoopy</title>
        <link rel='shortcut icon' href={prefix + '/favicon.ico'} />
      </Head>

      {/* Header */}
      <Header />

      {/* Feed */}
      <Feed />
      {/* Modal */}
      <Modal/>
    </div>
  )
}
