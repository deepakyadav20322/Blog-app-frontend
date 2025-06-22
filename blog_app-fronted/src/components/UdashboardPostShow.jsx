import React, { useState } from 'react'
import {PiHeart} from 'react-icons/pi'
import {FaRegComment} from 'react-icons/fa'
import {BsEye} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeletePostPopUp from './DeletePostPopUp'
import formatDate from './DateFormate'

const UdashboardPostShow = ({userSpecificPosts}) => {
  // const [deletePopShow,setDeletePopShow] = useState(false);
  const [deletePopShows, setDeletePopShows] = useState({});

  // Function to toggle the delete popup for a specific post
  const toggleDeletePopup = (postId) => {
    setDeletePopShows((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));

       // Call the callback to notify the parent about post deletion
   
  };


  return (
    <div>
   
         <div className='border-2 px-2 py-2'>
                <div className='flex flex-row justify-between mx-3'>
                  <h2 className='font-bold text-xl'>Posts</h2>
                  <div>
                    <select id="dashboard_sort" name="dashboard_sort">
                    <option value="volvo">Recentaly added</option>
                    <option value="saab">Most like</option>
                    <option value="mercedes">Most comment</option>
                    <option value="audi">All</option>
                    </select>
                  </div>
                </div>
                 
                 {userSpecificPosts.length == 0 &&  <div className="h-96 w-full mt-6 border-2 border-dashed border-gray-300 rounded-lg flex flex-col justify-center items-center bg-gray-50 p-2 text-center">
    <svg 
      className="w-16 h-16 text-gray-400 mb-4" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
      />
    </svg>
    <h3 className="text-lg font-medium text-gray-700 mb-1">No posts published yet</h3>
    <p className="text-gray-500 max-w-md">
      You haven't created any posts. Click the "Create Post" button to share your first story.
    </p>
    <Link
    to={'/new'} 
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
    >
      Create Your First Post
    </Link>
  </div>}
                { userSpecificPosts.map((post)=>(
                <div key={post._id} className='posts-container flex-col md:flex-row flex justify-between items-start border-2 p-4 rounded bg-white m-2'>
                  <div><Link to={`/singleBlog/${post._id}`} className='text-[#3B49DF] font-bold'>{post.title}</Link>
                  <p className='text-[12px]'>Published: {formatDate(post?.createdAt)}</p>
                  </div>
                  <div className='flex flex-row justify-between sm:justify-center mt-2 sm:mt-1 md:mt-0'>
                  <div className='flex flex-row justify-between items-center'> 
                    {/* <PiHeart size={21} className='mx-[6px]' /> */}
                    <FaRegComment className='mx-[6px]' size={21}/> <div className='flex gap-[2px] mr-1'> <BsEye size={21} className='mx-[6px]' />{post.viewCount/2} </div>
                  </div>
                  <div className='flex flex-row justify-between items-center'><Link  className='ml-2 text-red-600' onClick={()=> toggleDeletePopup(post._id)} >Delete</Link>
                  <Link to={`/updatePost/${post._id}`} className='mx-[0.8rem] text-green-600'>Edit</Link>
                  </div>
                  </div>
                  {deletePopShows[post._id] ? (
              <DeletePostPopUp  setDeletePopShow={(isOpen) => toggleDeletePopup(post._id)}  postId={post._id} />) : ("")}
                  </div>
                ))}
            </div>
     

            </div>
  
)}

export default UdashboardPostShow