import React from 'react'
import userLogo from '../assets/userLogo.jpg'
import {BiSolidEdit} from 'react-icons/bi'
import {FiTrash2} from 'react-icons/fi'
import { Link } from 'react-router-dom'


const UesrProfile = () => {
  return (
    <div>

       <div className='w-full bg-primary h-40 relative mb-7 flex items-end justify-center'>
         <div className='absolute w-36 h-36 rounded-full bg-[#F5F5F5] top-[-30%] left-[30%] sm:left-[40%] overflow-hidden'><img src={userLogo} alt="" /> 
         </div>
         <span className='mb-5 text-[18px] font-medium'>@informationtechnology20322</span>
       </div>
     
        {/* // Personal detail------------------------------- */}
       <div className='w-full bg-[#161d29e6] text-white min-h-40  px-3 py-2 text-xl mb-7'>
        <div className='w-[80%] m-auto'>
                <div className='flex justify-between items-center'><span className='text-[18px] font-bold'>Personal Detail</span>

               <Link to={'/profile/update'} className=" flex bg-[#ffc107] text-black text-[15px] font-medium mt-1 py-2 px-4 rounded mb-3 ms-0 ms-sm-2 mt-sm-3 ms-md-0"><span className='pe-1 fw-bold'>Edit</span>  <span><BiSolidEdit className='inline'/></span></Link>
                </div>
            <div className='flex flex-col md:flex-row justify-start gap-x-40 my-4'>
           <div className='flex flex-col text-[14px]'>
            <span className='text-[#8da08e]'>Full Name</span> 
            <span className=''>Deepak yadav</span> 
            </div>
           <div className='flex flex-col text-[14px]'>
            <span className='text-[#8da08e]'>Email</span> 
            <span className=''>Deepak01@gmail.com</span> 
            </div>
            </div>
            <div className='flex  flex-col md:flex-row justify-start gap-x-40 my-4'>
           <div className='flex flex-col text-[14px]'>
            <span className='text-[#8da08e]'>Full Name</span> 
            <span className=''>Deepak yadav</span> 
            </div>
           <div className='flex flex-col text-[14px]'>
            <span className='text-[#8da08e]'>Email</span> 
            <span className=''>Deepak01@gmail.com</span> 
            </div>
            </div>
           </div>
          
       </div>
        {/* --------------------------------------------------- */}
      
        {/* // bio section ---------------------------------------------- */}
        <div className='w-full bg-[#161d29e6] text-white min-h-40  px-3 pt-1 pb-2 text-xl mb-7'>
       <div className='flex justify-between items-center'><span className='text-[18px] font-bold pl-3'>Your Bio</span>
       <Link to={'/profile/update'} className=" flex bg-[#ffc107] text-black text-[15px] font-medium mt-1 py-2 px-4 rounded mb-3 ml-sm-2 mt-sm-3 mr-10 md:mr-20"><span className='pe-1 fw-bold'>Edit</span>  <span><BiSolidEdit className='inline'/></span></Link>
        </div>
        <div className='text-base px-2 my-3'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, distinctio quaerat? Magnam est cum exercitationem aliquam temporibus ut facilis natus officiis eligendi voluptatem iure, placeat quo inventore reiciendis ipsam earum laudantium. Quidem quisquam doloribus voluptas recusandae ad cum id </p>
        </div>
        </div>

 
    </div>
  )
}

export default UesrProfile