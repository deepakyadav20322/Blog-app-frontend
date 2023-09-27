import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';
import userLogo from '../assets/userLogo.jpg';

    const profileLinks = [
        {
          linkText: "Dashboard",
          link: "/dashboard"
        },
        {
          linkText: "Facebook",
          link: "https://www.facebook.com"
        },
        {
          linkText: "Twitter",
          link: "https://www.twitter.com"
        },
        {
          linkText: "Instagram",
          link: "https://www.instagram.com"
        },
        {
          linkText: "Sign out",
          link: "http://localhost:5173/logout"
        }
      ];
      

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function DropDownAllLinks() {

  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  rounded-md bg-white hover:bg-gray-50">
        <img src={userLogo} className='w-[50px] h-[50px] rounded-full border-2'/>
         
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
        
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none userProf ">
          <div className="py-1">
          {profileLinks.map((data,idx)=>(
            <Menu.Item key={idx}>
              {({ active }) => (
                <Link
                  to={data.link}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 {data.linkText}
                </Link>
              )}
            </Menu.Item>
            ))}
    
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
