import Logo from "../public/snoopy-logo.png"
import Image from "next/image"
import {
 SearchIcon,
 PlusCircleIcon,
 UserGroupIcon,
 HeartIcon,
 PaperAirplaneIcon,
 MenuIcon
  

} from '@heroicons/react/outline'
import {
   HomeIcon
     
   
   } from '@heroicons/react/solid'
function Header() {
    return (
        <div className="shadow-sm border-b sticky top-0 z-50 bg-blue-400" >
        <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">
            {/* Left */}
            <div className="relative h-12 w-20 cursor-pointer mt-2 bg-indigo-100 rounded-full">
                   {<img src={Logo} layout="fill"  objectfit="contain" />} 

            </div>  

            {/*Middle */}
            <div className="max-w-xs">
            <div className="relative mt-1 p-3 rounded-md ">
                <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                </div>
                <input className="bg-gray-50 block w-full pl-10 
                 sm:text-sm  focus:ring-black  rounded-md
                focus:border-black "  type="text"  placeholder="Search"/>
               
            </div>
            </div>
           


            {/*Right */}
            <div className="flex items-center justify-end space-x-4">
                <HomeIcon className="navBtn" />
                <MenuIcon className="h-6 md:hidden" />
                <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-1 -right-2 text-xs w-5
                h-5 flex items-center justify-center bg-red-500 rounded-full animate-pulse text-white" >3</div>
                </div>
                <PlusCircleIcon className="navBtn" />
                
     
                <UserGroupIcon className="navBtn" />
                <HeartIcon className="navBtn" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1yfV8m75x0l3BFSEcTteFRkvvdra5ZP8afQ&usqp=CAU"
                alt="Profile picture" className="h-10 rounded-full cursor-pointer" />
            </div>
            
            </div>
        </div>
    )
}

export default Header
