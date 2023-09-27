import React, { useContext, useEffect,useState } from 'react'
import { Authcontext } from '../context/UserContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsSave } from 'react-icons/bs';
import { FiBookmark } from 'react-icons/fi';
import FirstDoLoginPopUp from './FirstDoLoginPopUp';


const BlogCard = ({post}) => {

  const [postSavedAllowedPopUp, setPostSavedAllowedPopUp] = useState(false);
  const token = JSON.parse(localStorage.getItem('blogAuth'))?.token;

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const handleSavePostIcon = (e)=>{
    e.preventDefault()
    if(token){
      setPostSavedAllowedPopUp(false);
    }else{
      setPostSavedAllowedPopUp(true);
     
    }
  }

 useEffect(()=>{
console.log('blogcard render')
console.log(post)
 },[])

  return (
    // <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t bg-black border-gray-200 pt-10 sm:mt-16 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">
    // {posts.map((post) => (
      <article key={post._id} className="flex max-w-xl flex-col items-start justify-between p-3 rounded shadow-sm border border-gray-300">
       
        <div className="group relative">
          <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`/singleBlog/${post._id}`} className='leading-[2rem]' >
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <div className="relative mt-5 flex items-center gap-x-4">
          <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link >
                <span className="absolute inset-0" />
                {post.author.fname}{" "}
                {post.author.lname}
               
              </Link>
            </p>
            {/* <p className="text-gray-600">{post.author.role}</p> */}
            <time dateTime={post.createdAt} className="text-gray-500">
            {formattedDate}
          </time>
          </div>
          
        </div>
         
        <p className="mt-5 font-sans mb-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
        </div>
        
        <div className="flex items-center justify-between gap-x-4 w-full">
          <div className='flex items-center gap-x-4 text-xs my-3'>
        {(post.tags).map((tag,id)=>(
         <Link to={'#'} key={id} 
           href=""
           className="relative inline-block z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
         >
               {tag}
         
         </Link>
      ))}
      </div>
      <span>  <FiBookmark onClick={handleSavePostIcon} size={22} color= 'black' className='inline cursor-pointer'/></span>
       </div>
       {( postSavedAllowedPopUp) && <FirstDoLoginPopUp  setAllowedPopUp={setPostSavedAllowedPopUp} />}
      </article>
  //   ))}
  // </div>
  
  )
}

export default BlogCard