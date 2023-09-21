import React from 'react'
import {PiHeart} from 'react-icons/pi'
import {FaRegComment} from 'react-icons/fa'
import {BsEye} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const UdashboardPostShow = () => {
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
                <div className='posts-container flex-col md:flex-row flex justify-between items-center border-2 p-4 rounded bg-white m-2'>
                  <div><Link className='text-[#3B49DF] font-bold'> Test Post</Link>
                  <p className='text-[12px]'>Published: 19 sep</p>
                  </div>
                  <div className='flex flex-row '>
                  <div className='flex flex-row justify-between items-center'> <PiHeart size={21} className='mx-[6px]' /><FaRegComment className='mx-[6px]' size={21}/> <BsEye size={21} className='mx-[6px]' /> 
                  </div>
                  <div className='flex flex-row justify-between items-center'><Link className='ml-2'>Manage</Link>
                  <Link className='mx-2'>Edit</Link>
                  </div>
                  </div>
                  </div>
            </div>
    </div>
  )
}

export default UdashboardPostShow