import React, { useState,useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {LiaHomeSolid} from 'react-icons/lia'
import {AiFillSetting} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import img1 from '../assets/triangle-light-blog.png'
import img2 from '../assets/trophy-blog.png'
import { MdNotifications } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { BsFilePost } from 'react-icons/bs'
import { MdEventNote } from 'react-icons/md'
import AdminUserTable from '../components/AdminUserTable'
import axios from 'axios'
import { baseURL } from '../config'
import  toast,{Toaster} from 'react-hot-toast'
import debounce from 'lodash.debounce'; // Import debounce from lodash


const AdminDashboard = () => {

  const [loading ,setLoading] = useState(false);
    const [allUserData,setAllUserData] = useState([]);
    const [blocking, setBlocking] = useState(false);
  
    const [query, setQuery] = React.useState('');

      // Debounced function to fetch data from the API
  const debouncedFetchData = debounce(async (search) => {
    try {
      setLoading(true);
      const adminToken = localStorage.getItem("adminBlogAuth");
      const res = await axios.get(`${baseURL}/admin/getAllUserInfo?search=${search}`, {
        headers: {
          Authorization: `Bearer ${adminToken}`
        }
      });
      if (res.status === 200) {
        console.log(res.data)
        setAllUserData(res.data.data);
        setTimeout(()=>{
          setLoading(false);
        },200)
        
       
      }
    } catch (error) {
      console.error(error);
      toast.error('Unable to fetch data');
      setLoading(false)
    }
   
  }, 300);

  // Trigger the debounced API call whenever query changes
  useEffect(() => {
   
    debouncedFetchData(query);

    // Cleanup function to cancel debounced calls if the component unmounts
    return () => {
      debouncedFetchData.cancel();
    };
  }, [query,blocking]);





  return (
    <>
    <div className='bg-[#F4F5FA]'>
        <div className='top'></div>
        <div className='w-full flex flex-row justify-between items-start'>
        <div className='admin-dash-left max-w-[270px] min-w-[250px] w-full border-2 py-5 h-[50vh]'>
             <div className='w-full '>
                     <ul className='pl-2'>
                       
                     <li className=' w-[90%] '>
                        <Link className={`bg-gray-50 w-full px-2 py-1 pt-2  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block ${window.location.href=='http://localhost:5173/admin'? 'bg-green-400 text-white':""} `}><LiaHomeSolid size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Dashboard</span></Link>
                      </li>

                        <li className=' w-[90%] '>
                        <Link className={`bg-gray-50 w-full px-2 py-1 pt-2 rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}>
                        <AiFillSetting size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Account Setting</span></Link>
                      </li>
                       
                        <li className=' w-[90%] '>
                        <Link className={`bg-gray-50 w-full px-2 py-1 pt-2  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}><HiOutlineMail size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Emails</span></Link>
                      </li>

                        <li className=' w-[90%] '>
                        <Link className={`bg-gray-50 w-full px-2  py-1 pt-2  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}><MdNotifications  size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Notifications</span></Link>
                      </li>

                        <li className=' w-[90%] '>
                        <Link className={`bg-gray-50 w-full px-2  py-1 pt-2  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}><MdEventNote size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Events</span></Link>
                      </li>
                        
                   </ul>

             </div>
        </div>
        <div className='rigth-dashboard  flex flex-col justify-start items-start w-full'>
        <div className='admin-dash-right-top min-w-[700px] w-full border-2 flex flex-row justify-center items-cenetr px-4 gap-x-5 rounded '>
              <div className='Box-one w-[360px] p-5 border-2 border-black rounded bg-white relative overflow-hidden'>
              <h1 className='text-xl font-medium'>Congratulations John!</h1>
              <p>Best seller of the month</p>
              <div className='text-2xl p-4 text-[#9155FD] font-bold'>43.2K</div>
              <button className='px-4 py-1 bg-[#9155FD] rounded text-white'>View Detail</button>
              <img src={img1} className='absolute top-0 right-0 ' height={'170px'} alt="" />
              <img src={img2} className='absolute bottom-[20px] right-[36px] h-[98px] ' alt="" />
            
              </div>
              <div className='four-box w-full mx-auto flex justify-between px-4 my-4 '>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-36 ">

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-4 w-56 h-48  hover:scale-95 cursor-pointer transition-transform duration-100">
        {/* Card content here */}
        <div className='text-xl'>Total Posts &nbsp; 
        <span className='pl-4'>
        <svg className='bg-[#E0DCFE] p-2 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40" fill="currentColor"><path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"></path></svg>
        </span>
        </div>
       
        <div className='text-4xl font-semibold'>18</div>
        <div className='text-base mt-10'>1 Completed</div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-4 w-56 h-48  hover:scale-95 cursor-pointer transition-transform duration-100">
        {/* Card content here */}
        <div className='text-xl'>Total users
        <span className='pl-4'>
        <svg className='bg-[#E0DCFE] p-2 inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="40" height="40" fill="currentColor"><path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path></svg>
        </span>
        </div>
        <div className='text-4xl font-semibold'>{allUserData.length}</div>
        <div className='text-base mt-12'>1 Completed</div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-4 w-56 h-48  hover:scale-95 cursor-pointer transition-transform duration-100">
        {/* Card content here */}
        <div className='text-xl'>Active users</div>
        <div className='text-3xl font-semibold'> {allUserData.filter(user => user.blocked === 0).length}</div>
        <div className='text-xl'>Blocked users</div>
        <div className='text-3xl font-semibold'> {allUserData.filter(user => user.blocked === 1).length}</div>
       
      </div>
    </div>
      </div>
             
        </div>

      


{/* --------------------Search box(start) ------------------------------- */}

<div className='w-full'>
<div className='flex flex-row justify-start items-center w-full my-3 mx-2'>
      <input
        type="text"
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search users..."
        className='max-w-[1000px] w-full rounded-[20px] px-2 ml-2'
      />
     
    </div>
</div>

{/* --------------------Search box(end) ------------------------------- */}

{/* --------------------Admin User Table (start) ------------------------------- */}
   
      <div className='px-4 w-full ' >
        
      <AdminUserTable allUserData={allUserData} loading={loading} setBlocking={setBlocking} blocking={blocking} />

      </div>
        </div>
        </div>
    </div>
    <Toaster/>
    </>
  )
}

export default AdminDashboard