import React, { useContext, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { Authcontext } from '../context/UserContext'
import FirstDoLoginPopUp from './FirstDoLoginPopUp';
import { BsSearch } from 'react-icons/bs';


const BlogList = () => {

  const [loading,setLoading] = useState(true);
 
 
const {allPosts} = useContext(Authcontext);

useEffect(() => {
  const timeoutId = setTimeout(() => {
  
    setLoading(false)
    clearTimeout(timeoutId);
  }, 1000); 
  return () => {
    clearTimeout(timeoutId);
  };
}, []);

// if (loading) {
//   return( <div className='max-width-[1080px] m-auto pb-10 mt-12'>
//     <div className='border border-blue-300 shadow rounded-md p-4   w-[90%] md:w-[80%]  mx-auto'>
//   <div className='animate-pulse flex space-x-4'>
//     <div className='rounded-full bg-slate-200 h-10 w-10'></div>
//     <div className='flex-1 space-y-6 py-1'>
//       <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
//       <div className='space-y-3'>
//         <div className='grid grid-cols-3 gap-4'>
//           <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
//           <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
//         </div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//       </div>
//     </div>
//   </div>
//   </div>
//   <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1  gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
// <div className='border border-blue-300 shadow rounded-md p-4 max-w-[550px] w-full h-[230px] md:h-[300px] mx-auto lg:mr-8'>
//   <div className='animate-pulse flex space-x-4'>
//     <div className='rounded-full bg-slate-200 h-10 w-10'></div>
//     <div className='flex-1 space-y-6 py-1'>
//       <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
//       <div className='space-y-3'>
//         <div className='grid grid-cols-3 gap-4'>
//           <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
//           <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
//         </div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         <div className='mt-20 space-y-5'>
//           <div className='h-[30px]'></div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   {/* ------------------------------ */}
//   <div className='border border-blue-300 shadow rounded-md p-4 max-w-[550px] w-full h-[230px] md:h-[300px]  mx-auto lg:ml-8'>
//   <div className='animate-pulse flex space-x-4'>
//     <div className='rounded-full bg-slate-200 h-10 w-10'></div>
//     <div className='flex-1 space-y-6 py-1'>
//       <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
//       <div className='space-y-3'>
//         <div className='grid grid-cols-3 gap-4'>
//           <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
//           <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
//         </div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         <div className='mt-20 space-y-5'>
//           <div className='h-[30px]'></div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div>
//   </div>
// </div>)
//   }



  return (
    <div>
     <div>
        {/* <div className='rounded-[2px] border-black w-full h-12 bg-primary flex flex-row justify-center items-center text-2xl font-bold text-white'>
            This is very usefull blog application for students.
          </div> */}
        <div className=" pb-2sm:py-2">
      <div className="mx-auto max-w-7xl w-full px-6 lg:px-8">
      
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12  pt-10 sm:mt-10 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
    {allPosts.map((post,id) => (

        <BlogCard key={id} post={post} />
        ))}

        </div>
      </div>
    </div> 
    </div>
    
    </div>
  )
}

export default BlogList