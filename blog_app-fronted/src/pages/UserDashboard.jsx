import React,{useContext, useEffect, useState} from 'react'
import { Link, json, useNavigate } from 'react-router-dom'
import UdashboardPostShow from '../components/UdashboardPostShow'
import { Authcontext } from '../context/UserContext'
import UserProfile from '../components/UesrProfile'
import UserProfileUpdate from './UserProfileUpdate'
import UdashboardPostStats from '../components/UdashboardPostStats'
import {VscThreeBars} from 'react-icons/vsc'
import {CgClose} from 'react-icons/cg'

const DashboardLinks =[
  { text: 'Post', componentRener: '#' },
  { text: 'Profile', componentRender: '#' },
  { text: 'Analytics', componentRender: '#' },
];


const UserDashboard = () => {

  const [dashSmallNavOpen,setDashSmallNavOpen] = useState(false);
  const{loginUser,setLoginUser}  = useContext(Authcontext);
  const naviagte = useNavigate()
  console.log('loginUesr=>',loginUser);
  const[renderValue,setRenderValue] = useState('Post');

  const handleClickRender = (event, linkText) => {
    event.preventDefault();
    setRenderValue(linkText);
  }


  return (
    
    // <div className='text-center text-4xl font-bold'> <div>UserDashboard</div></div>
    <>
      <div className='bg-[#F5F5F5] min-h-screen relative'>
                 
        {/* ======================= (stsrt)   Dashboard navigation bar for small screes========================= */}
        <div className={`left-side absolute top-[-10px] left-0 md:hidden transition-all duration-300 ease-in-out  ${dashSmallNavOpen?'block':"hidden"} `}>
         
              <div className='left-navigation min-h-[100vh] rounded bg-white border-2 border-gray-400 w-[300px] mt-2'>
              <div className='navCloseBtn flex flex-row justify-end items-center'><CgClose className='inline p-1 border-[1px] border-gray-200' size={40} color='red' onClick={()=>setDashSmallNavOpen(false)}  /></div>
                <ul className=' mb-2 h-full text-base'>
                  {DashboardLinks.map((DashLink,idx)=>(
                        <li key={idx} className=' w-full hover:bg-[#E5E7EB] '>
                        <Link onClick={(event) => handleClickRender(event, DashLink.text)} className='border-b-[1px] border-gray-500 w-full px-2 py-3 block'>{DashLink.text}</Link>
                      </li>
                  ))}
                
                </ul>

              </div>
            </div>
        {/* ======================= (END)   Dashboard navigation bar for small screes========================= */}

        <div className=' max-w-[1280px] m-auto border-2 mt-2 '>
            <h1 className='my-2 text-2xl md:text-3xl font-bold md:ml-6'> <span onClick={()=>setDashSmallNavOpen(true)}><VscThreeBars className="inline ml-2 mr-5 cursor-pointer" /></span>User Dashboard</h1>
            <div className='flex flex-row justify-start items-start w-full'>
            <div className='left-side hidden md:block '>
              <div className='left-navigation min-h-[90vh] rounded bg-white border-2 border-gray-400 w-[300px] mt-2'>
                <ul className=' mb-2 h-full text-base'>
                  {DashboardLinks.map((DashLink,idx)=>(
                        <li key={idx} className=' w-full hover:bg-[#E5E7EB] '>
                        <Link onClick={(event) => handleClickRender(event, DashLink.text)} className='border-b-[1px] border-gray-500 w-full px-2 py-3 block'>{DashLink.text}</Link>
                      </li>
                  ))}
                
                </ul>

              </div>
            </div>
            <div className='right-side m-3 w-full'>
              {/* <UdashboardPostShow/> */}
              {/* <UesrProfile/> */}
              {/* <UserProfileUpdate/> */}
              {renderValue==='Post'?<UdashboardPostShow/>:""}
              {renderValue==='Profile'?<UserProfile/>:""}
              {renderValue==='Analytics'?<UdashboardPostStats/>:""}
              {/* {renderValue==='Post'?<UdashboardPostShow/>:""} */}
            </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default UserDashboard