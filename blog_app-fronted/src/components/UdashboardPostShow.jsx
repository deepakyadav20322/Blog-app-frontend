import React from 'react'
import {PiHeart} from 'react-icons/pi'
import {FaRegComment} from 'react-icons/fa'
import {BsEye} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'


const UdashboardPostShow = ({userSpecificPosts}) => {

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

                { userSpecificPosts.map((post)=>(
                <div key={post._id} className='posts-container flex-col md:flex-row flex justify-between items-start border-2 p-4 rounded bg-white m-2'>
                  <div><Link to={`/singleBlog/${post._id}`} className='text-[#3B49DF] font-bold'>{post.title}</Link>
                  <p className='text-[12px]'>Published: 19 sep</p>
                  </div>
                  <div className='flex flex-row justify-between sm:justify-center mt-2 sm:mt-1 md:mt-0'>
                  <div className='flex flex-row justify-between items-center'> <PiHeart size={21} className='mx-[6px]' /><FaRegComment className='mx-[6px]' size={21}/> <div className='flex gap-[2px] mr-1'> <BsEye size={21} className='mx-[6px]' />{post.viewCount} </div>
                  </div>
                  <div className='flex flex-row justify-between items-center'><Link className='ml-2 text-red-600'>Delete</Link>
                  <Link to={`/updatePost/${post._id}`} className='mx-[0.8rem] text-green-600'>Edit</Link>
                  </div>
                  </div>
                  </div>
                ))}
            </div>
            </div>
  
)}

export default UdashboardPostShow