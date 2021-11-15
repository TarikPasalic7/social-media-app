import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import {
   
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    HomeIcon,

  
   
  
  } from '@heroicons/react/outline'
  import { useRouter } from 'next/router';


export default function Footer() { 
    const [open,setOpen]=useRecoilState(modalState);
     const router = useRouter();
    return (
        <div className="bg-blue-400
        text-3xl text-white text-center
        fixed
        inset-x-0
        bottom-0
        p-4 z-50 content-center  flex items-center justify-center space-x-12 md:hidden" >

<HomeIcon onClick={()=>router.push('/')}  className="footerBtn"/>
<div className='relative footervBtn'>
            <PaperAirplaneIcon className='footerBtn rotate-45' />
            <div className='absolute -top-1 -right-2 text-xs w-5
                h-5 flex items-center justify-center bg-red-500 rounded-full animate-pulse text-white'
            >2
            </div>
          </div>

 
  <PlusCircleIcon onClick={()=>setOpen(true)} className="footerBtn "/>
  <UserGroupIcon className="footerBtn"/>
  <HeartIcon className="footerBtn" />
        </div>
    )
}
