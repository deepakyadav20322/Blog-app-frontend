import React, { useState } from 'react'
import {PiHeart} from 'react-icons/pi'
import {FaRegComment} from 'react-icons/fa'
import {BsEye} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DeletePostPopUp from './DeletePostPopUp'


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
   
         <div className='border-2'>
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
                 {userSpecificPosts.length == 0 && <div className='h-60 w-full mt-2 border-2 text-center flex flex-row justify-center items-center border-gray-400 rounded '>
                         No any post publish yet.
                 </div> }
                { userSpecificPosts.map((post)=>(
                <div key={post._id} className='posts-container flex-col md:flex-row flex justify-between items-start border-2 p-4 rounded bg-white m-2'>
                  <div><Link to={`/singleBlog/${post._id}`} className='text-[#3B49DF] font-bold'>{post.title}</Link>
                  <p className='text-[12px]'>Published: 19 sep</p>
                  </div>
                  <div className='flex flex-row justify-between sm:justify-center mt-2 sm:mt-1 md:mt-0'>
                  <div className='flex flex-row justify-between items-center'> <PiHeart size={21} className='mx-[6px]' /><FaRegComment className='mx-[6px]' size={21}/> <div className='flex gap-[2px] mr-1'> <BsEye size={21} className='mx-[6px]' />{post.viewCount} </div>
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