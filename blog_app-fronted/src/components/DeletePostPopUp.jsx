import { Fragment, useContext, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import axios from 'axios';
import { baseURL } from '../config';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Authcontext } from '../context/UserContext';
import toast, { Toaster } from 'react-hot-toast';


const DeletePostPopUp = ({setDeletePopShow, postId}) =>{

    const {postDeletedTrack,setPostDeletedTrack} = useContext(Authcontext)
   const naviagte  = useNavigate() 
  const [open, setOpen] = useState(true);
  const token = JSON.parse(localStorage.getItem('blogAuth'))?.token;

  const cancelButtonRef = useRef(null);

  const handleDeletePost = async()=>{
    try {
        const res= await axios.delete(`${baseURL}/post/deletePost/${postId}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        if(res.status===200){
            console.log('Post deleted successfully');
            setDeletePopShow(false)
            setPostDeletedTrack(!postDeletedTrack);
            toast.success('Post deleted successfully', {
                duration:3000,
                position: 'top-right',
                className:'toasti',
              })

        }
    } catch (error) {
        console.log('handledeletePost',error);
    }
  }

  const handleClose = () => {
    setOpen(false);
    setDeletePopShow(false)

  };


  return (
    <>
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Delete Post
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deleet your account? All of yourthis post data will be permanently
                          removed. This action cannot be undone.
                        </p>
                        <p className="text-sm text-gray-600">Post Id :- ({postId})</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    onClick={handleDeletePost}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto hover:bg-red-500 hover:text-white"
                    onClick={() => {setOpen(false);setDeletePopShow(false)}}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
      
    </Transition.Root>
    <Toaster/>
    </>
  )
}

export default  DeletePostPopUp;