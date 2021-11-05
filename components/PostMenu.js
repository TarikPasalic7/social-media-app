import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { doc, deleteDoc } from '@firebase/firestore';
import { db } from '../firebase';
import { useSession } from 'next-auth/react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PostMenu({postid}) {
  const {data:session} =useSession();
  const deletePost = async () =>{

    await deleteDoc(doc(db,'posts',postid));
  }
  

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
      <Menu.Button className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 font-bold text-2xl">
         ...
         
        </Menu.Button>
    
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
        {
        session && ( <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Edit
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Duplicate
            </a>
          )}
        </Menu.Item>
      </div>)
      }
      {
        session && ( <div className="py-1">
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Archive
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href="#"
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Move
            </a>
          )}
        </Menu.Item>
      </div>)
      }
          
         
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Share
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Add to favorites
                </a>
              )}
            </Menu.Item>
          </div>
          {session && ( <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                onClick={deletePost}
                
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>)}
         
        </Menu.Items>
      </Transition>
    </Menu>
  )
}