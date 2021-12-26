
const prefix = process.env.NEXT_PUBLIC_BASE_PATH || ''
//import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  

 

} from '@heroicons/react/outline'
import {
  HomeIcon

} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import MainMenu from './MainMenu';
function Header () {
const {data: session} = useSession();
const router = useRouter();
const [open,setOpen]=useRecoilState(modalState);


  return (
    <div className='shadow-sm border-b sticky top-0 z-50 bg-blue-400'>
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <div onClick={()=>router.push('/')} className='relative  cursor-pointer md:mt-2 mt-4 md:h-12  w-12 h-2/3  rounded-full bg-indigo-100'>
          <img className=" p-1"  src={prefix + '/snoopy-lg.png'} layout='fill' objectfit='contain' />

        </div>

        {/* Middle */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md '>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              className='bg-gray-50 block w-full pl-10
                 sm:text-sm  focus:ring-black  rounded-md
                focus:border-black ' type='text' placeholder='Search'
            />

          </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon onClick={()=>router.push('/')} className='navBtn' />
          
        

          {session? ( <>      <div className='relative navBtn'>
            <PaperAirplaneIcon className='navBtn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5
                h-5 flex items-center justify-center bg-red-500 rounded-full animate-pulse text-white'
            >2
            </div>
          </div>
          <PlusCircleIcon onClick={()=>setOpen(true)} className='navBtn' />
          {/**
           * Add a post 
           * 
           *   <PlusCircleIcon onClick={()=>setOpen(true)} className='navBtn' />
           * 
           */ 
            
           
          }
         
          
        
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />
          
          
          <img
            
            src={session.user.image}
            alt='Profile picture' className='h-10 rounded-full cursor-pointer'
          /> </>    ):(

            <button className=" whitespace-nowrap" onClick={signIn}>Sign In</button>
          )
            
  }
  
        </div>        

      </div>
    </div>
  )
}

export default Header
