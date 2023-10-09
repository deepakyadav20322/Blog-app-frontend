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


  return (
  
      <article key={post._id} className="flex max-w-xl flex-col items-start justify-between p-3 rounded-[7px] shadow-lg border border-gray-300 active:border-blue-300 active:border-4 bg-white">
       
        

        <div className="relative mt-5 flex items-center gap-x-4">
         
          <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link to={`/writer/${post.author._id}`} className=' hover:text-blue-500' >
                <span className="absolute inset-0" />
                {post.author.fname}{" "}
                {post.author.lname}
               
              </Link>
            </p>
            {/* <p className="text-gray-600">{post.author.role}</p> */}
            <time dateTime={post.createdAt} className="text-gray-500">
            {formattedDate}            
            <span className='inline mr-2 font-medium text-sm sm:hidden ml-3 ' >, {post?.readTime} min </span>
          </time>
          </div>
        </div>
        <div className="group relative">
          <h3 className="mt-2 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`/singleBlog/${post._id}`} className='leading-[2rem]' >
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
         
         
        <p className="mt-3 font-sans mb-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
        </div>
        
        <div className="flex items-center justify-between gap-x-4 w-full">
          <div className='flex items-center gap-x-4 text-xs my-2 flex-wrap'>
        {(post.tags).map((tag,id)=>(
         <Link to={'#'} key={id} 
           href=""
           className="relative inline-block z-10 rounded-full bg-gray-100 px-3 py-1.5 my-1 font-medium text-gray-600 hover:bg-gray-200"
         >
               {tag}
         
         </Link>
      ))}
      </div>
      {/* <span>  <FiBookmark onClick={handleSavePostIcon} size={22} color= 'black' className='inline cursor-pointer'/></span> */}
      <span className=' mr-2 font-medium text-sm hidden sm:inline ' >{post?.readTime} min </span>
       </div>
       {( postSavedAllowedPopUp) && <FirstDoLoginPopUp  setAllowedPopUp={setPostSavedAllowedPopUp} />}
      </article>
  
  )
}

export default BlogCard