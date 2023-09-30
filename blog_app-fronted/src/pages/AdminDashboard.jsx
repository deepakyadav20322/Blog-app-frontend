import React, { useState,useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {LiaHomeSolid} from 'react-icons/lia'
import {AiFillSetting} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'
import img1 from '../assets/triangle-light-blog.png'
import img2 from '../assets/trophy-blog.png'
import { FaUserAlt } from 'react-icons/fa'
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
                     <ul>
                       
                     <li className=' w-[80%] '>
                        <Link className={`bg-gray-50 w-full px-2 py-1  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}><LiaHomeSolid size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Dashboard</span></Link>
                      </li>

                        <li className=' w-[80%] '>
                        <Link className={`bg-gray-50 w-full px-2 py-1  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}>
                        <AiFillSetting size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Account Setting</span></Link>
                      </li>
                       
                        <li className=' w-[80%] '>
                        <Link className={`bg-gray-50 w-full px-2 py-1  rounded-br-[1.5rem] rounded-tr-[1.5rem]  hover:bg-green-400 hover:text-white my-2 block `}><HiOutlineMail size={25} className='inline mb-2 mr-2'/><span className='text-xl'>Emails</span></Link>
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
        <div>total Posts</div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-4 w-56 h-48  hover:scale-95 cursor-pointer transition-transform duration-100">
        {/* Card content here */}
        <div>Total users</div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-4 w-56 h-48  hover:scale-95 cursor-pointer transition-transform duration-100">
        {/* Card content here */}
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