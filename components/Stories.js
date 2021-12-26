import faker from 'faker' // for fetching fake data
import { useEffect, useState } from 'react'
import Story from './Story'
import {signOut,useSession} from 'next-auth/react'
function Stories () {
  const {data: session} = useSession();
  const [suggesetions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestionsTemp = [...Array(20)].map((_, i) => (
      {

        ...faker.helpers.contextualCard(),
        id: i
      }

    ))
    setSuggestions(suggestionsTemp)
  }, [])
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border border-gray-200
        overflow-x-scroll rounded-sm scrollbar-thin scrollbar-thumb-black '
    >
   {session && (
           <Story  img={session.user.image} username={session.user.username} />

   )}
      {suggesetions.map((profile) => (
            
        <Story key={profile.id} img="user.png" username={profile.username} />
     ))} 
    </div>
  )
}

export default Stories
