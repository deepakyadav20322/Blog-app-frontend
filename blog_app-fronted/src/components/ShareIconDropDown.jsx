import { Fragment, useRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FaRegShareFromSquare } from 'react-icons/fa6'
import {FacebookShareButton,TwitterShareButton, LinkedinShareButton} from "react-share";
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import copy from 'clipboard-copy';
import toast from 'react-hot-toast';
import { BiLink } from 'react-icons/bi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ShareIconDropDown({currentURL}) {

const inputRef = useRef(null);
const menuButtonRef = useRef(null);
const handleCopy = () => {
    copy(currentURL); // Get current URL and copy to clipboard
    inputRef.current.select();
    toast('Link copied',{
        style:{
            backgroundColor:'black',
            color:'white',
            maxWidth:'320px',
            width:'100%',
            padding:'6px',
            textAlign:'left'
        }
    })
    menuButtonRef.current.click();
  };
 
  const closeDropDown = ()=>{
    menuButtonRef.current.click(); // Close the dropdown menu
  }


  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button  ref={menuButtonRef}  className="">
        <FaRegShareFromSquare size={25} className='inline cursor-pointer hover:text-green-500' />
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
        <Menu.Items className="absolute right-[0%] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 <FacebookShareButton url={currentURL} onClick={closeDropDown} >
                   <FaFacebook size={20} color='gray' className='inline mr-3 ' /> Share on facebook
                 </FacebookShareButton>
                
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                 
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 
                  <LinkedinShareButton url={currentURL} onClick={closeDropDown} >
                   <FaLinkedin size={20} color='gray' className='inline mr-3 ' />  Share on LinkedIn
                 </LinkedinShareButton>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  <TwitterShareButton url={currentURL} onClick={closeDropDown} >
                   <AiOutlineTwitter size={20} color='gray' className='inline mr-3 ' />  Share on Twitter
                 </TwitterShareButton>
                </div>
              )}
            </Menu.Item>
           
              <Menu.Item>
                {({ active }) => (<>                 
                <input type="text" ref={inputRef} value={currentURL} 
                 readOnly 
                  style={{ display: 'none' }} />
                  
                  <button
                    type="submit"
                    onClick={handleCopy}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    <BiLink size={20} className='inline mr-4' />
                    Copy Link
                  </button>
                  </>

                )}
              </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
