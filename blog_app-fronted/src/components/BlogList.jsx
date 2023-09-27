import React, { useContext, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { Authcontext } from '../context/UserContext'
import FirstDoLoginPopUp from './FirstDoLoginPopUp';


const BlogList = () => {

  const [loading,setLoading] = useState(true);
 
const {allPosts} = useContext(Authcontext)

useEffect(() => {
  const timeoutId = setTimeout(() => {
  
    setLoading(false)
    clearTimeout(timeoutId);
  }, 1000); 
  return () => {
    clearTimeout(timeoutId);
  };
}, []);

if (loading) {
  return(  
    <div className='max-width-[1080px] m-auto pb-10'>
      <div className='border border-blue-300 shadow rounded-md p-4   w-[85%] md:w-[90%]  mx-auto'>
    <div className='animate-pulse flex space-x-4'>
      <div className='rounded-full bg-slate-200 h-10 w-10'></div>
      <div className='flex-1 space-y-6 py-1'>
        <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
        <div className='space-y-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
            <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
          </div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
        </div>
      </div>
    </div>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
  <div className='border border-blue-300 shadow rounded-md p-4 max-w-[600px] w-full h-[250px] md:h-[300px] mx-auto'>
    <div className='animate-pulse flex space-x-4'>
      <div className='rounded-full bg-slate-200 h-10 w-10'></div>
      <div className='flex-1 space-y-6 py-1'>
        <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
        <div className='space-y-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
            <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
          </div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          <div className='mt-20 space-y-5'>
            <div className='h-[30px]'></div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/* ------------------------------ */}
    <div className='border border-blue-300 shadow rounded-md p-4 max-w-[600px] w-full h-[250px] md:h-[300px]  mx-auto'>
    <div className='animate-pulse flex space-x-4'>
      <div className='rounded-full bg-slate-200 h-10 w-10'></div>
      <div className='flex-1 space-y-6 py-1'>
        <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
        <div className='space-y-3'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
            <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
          </div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          <div className='mt-20 space-y-5'>
            <div className='h-[30px]'></div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>)
  }



  return (
    <div>
        <div>
        <div className="bg-white py-6 sm:py-7">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
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