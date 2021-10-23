import Stories from './Stories'
import Posts from './Posts'
import Profile from './Profile'
import Suggestions from './Suggestions'
import {signOut,useSession} from 'next-auth/react'

function Feed () {
  const {data: session} = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-3xl" }`}
    >
      {/* Section Left */}
      <section className='col-span-2'>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />

      </section>
      {session && ( <section className='hidden xl:inline-grid col-span-1'>
        {/* Profile */}
        <div className='fixed top-20'>
          <Profile />

          {/* Suggestions */}
          <Suggestions />

        </div>

      </section>)}
      {/* Section Right */}
     
    </main>
  )
}

export default Feed
