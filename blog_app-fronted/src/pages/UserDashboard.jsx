import React,{useContext,useEffect, useState} from 'react'
import { Link, json, useLocation, useNavigate } from 'react-router-dom'
import UdashboardPostShow from '../components/UdashboardPostShow'
import { Authcontext } from '../context/UserContext'
import UserProfile from '../components/UesrProfile'
import UserProfileUpdate from './UserProfileUpdate'
import UdashboardPostStats from '../components/UdashboardPostStats'
import {VscThreeBars} from 'react-icons/vsc'
import {CgClose} from 'react-icons/cg'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import CommentPopUp from '../components/FirstDoLoginPopUp'
import ShowAllFollowers from '../components/ShowAllFollowers'
import ShowAllFollowing from '../components/ShowAllFollowing'
import { baseURL } from '../config'



const DashboardLinks =[
  { text: 'Post', componentRener: '#'  , disable:false,},
  { text: 'Profile', componentRender: '#' , disable:false, },
  { text: 'Followers', componentRender: '#' , disable:false, },
  { text: 'Following', componentRender: '#' , disable:false, },
  { text: 'Analytics', componentRender: '#' , disable:false, },
 
 
];


const UserDashboard = () => {

  const naviagte = useNavigate()
  const {postDeletedTrack} = useContext(Authcontext);
   
  const [userSpecificPosts,setUserSpecificPosts] = useState([]);
  const [followerFollowing,setFollowerFollowing] = useState("");
  const userId = JSON.parse(localStorage.getItem('blogUser')).user._id;
  const token = JSON.parse(localStorage.getItem('blogAuth')).token;

  const [dashSmallNavOpen,setDashSmallNavOpen] = useState(false);
  const{loginUser}  = useContext(Authcontext);
  // console.log('loginUesr=>',loginUser);
  const[renderValue,setRenderValue] = useState('Post');

  useEffect(()=>{
 
    // console.log(userId)
   const getAllPostsUser = async()=>{
    try {
      const res = await axios.get(`${baseURL}/post/getAllPostsOfUser/${userId}`)
      if(res.status===200){
        // console.log('user spaecific data success')
        // console.log(res.data.data);
        setUserSpecificPosts(res.data.data);
      }
      
    } catch (error) {
      console.log(error);
      
    }}

 const getFollowerFollowing = async()=>{
  try {
    
     const res = await axios.get(`${baseURL}/user/getgetFollowerFollowing/${userId}`,{
       headers:{
        Authorization:`Bearer ${token}`,
        "Content-Type":"application/json"
       }
     }); 
     if(res.status===200){
      // console.log('getFollowerFollowing=>',res.data.data);
      setFollowerFollowing(res.data.data);
     }

  } catch (error) {
    console.log(error)
  }
 }

 getFollowerFollowing();
  getAllPostsUser();

  },[postDeletedTrack]);
 

  useEffect(() => {
    const loginMessage = localStorage.getItem('loginMessage');
    const updateMessage = localStorage.getItem('updateMessage');
    
    if (loginMessage !== null) {
      toast.success(loginMessage,{duration:3000});
      localStorage.removeItem('loginMessage');
     
    }
    if (updateMessage !== null) {
      toast.success(updateMessage,{duration:3000});
      localStorage.removeItem('updateMessage');
     
    }
  }, []);

  const handleClickRender = (event, linkText) => {
    event.preventDefault();
    setRenderValue(linkText);
    setDashSmallNavOpen(false)
  }

  return (
    
    
    <>
    
      <div className='bg-[#F5F5F5] min-h-screen relative'>
                
        {/* ======================= (stsrt)   Dashboard navigation bar for small screes========================= */}
        <div className={`left-side absolute top-[-10px] left-0 md:hidden transition-all duration-300 ease-in-out  ${dashSmallNavOpen?'block':"hidden"} z-10` }>
         
              <div className='left-navigation min-h-[100vh] rounded bg-white border-2 border-gray-400 w-[300px] mt-2'>
              <div className='navCloseBtn flex flex-row justify-end items-center'><CgClose className='inline p-1 border-[1px] border-gray-200' size={40} color='red' onClick={()=>setDashSmallNavOpen(false)}  /></div>
                <ul className=' mb-2 h-full text-base'>
                  {DashboardLinks.map((DashLink,idx)=>(
                        <li key={idx} className=' w-full hover:bg-[#E5E7EB] '>
                        <Link onClick={(event) => handleClickRender(event, DashLink.text)} className={`bg-gray-300 w-full px-2 py-3 hover:bg-green-400 hover:text-white my-2 block ${(renderValue)== DashLink.text?"bg-green-400 text-white":""} `}>{DashLink.text}</Link>
                      </li>
                  ))}
                
                </ul>

              </div>
            </div>
        {/* ======================= (END)   Dashboard navigation bar for small screes========================= */}

        <div className=' max-w-[1280px] m-auto'>
            <h1 className='my-2 text-2xl md:text-3xl font-bold md:ml-6 block'> <span onClick={()=>setDashSmallNavOpen(true)}><VscThreeBars className="inline ml-2 mr-5 cursor-pointer md:hidden" /></span>User Dashboard</h1>
            <div className='flex flex-row justify-start items-start w-full mt-10'>
            <div className='left-side hidden md:block '>
              <div className='left-navigation min-h-[90vh] rounded bg-white border-2 border-gray-400 w-[300px] mt-2'>
                <ul className=' mb-2 h-full text-base'>
                  {DashboardLinks.map((DashLink,idx)=>(
                        <li key={idx} className=' w-[90%] m-auto hover:bg-[#E5E7EB]'>
                        <Link onClick={(event) => handleClickRender(event, DashLink.text)}className={`bg-gray-300 w-full px-2 py-3 hover:bg-green-400 hover:text-white my-2 block transition-all duration-100 ${(renderValue)== DashLink.text?"bg-green-400 text-white":""} `}>{DashLink.text}</Link>
                      </li>
                  ))}
                
                </ul>

              </div>
            </div>
            <div className='right-side m-3 w-full'>
              {/* <UdashboardPostShow/> */}
              {/* <UesrProfile/> */}
              {/* <UserProfileUpdate/> */}
              {renderValue==='Post'?<UdashboardPostShow userSpecificPosts={userSpecificPosts} />:""}
              {renderValue==='Profile'?<UserProfile/>:""}
              {renderValue==='Analytics'?<UdashboardPostStats userSpecificPosts={userSpecificPosts}/>:""}
              {renderValue==='Followers'?<ShowAllFollowers followers={followerFollowing.followers} />:""}
              {renderValue==='Following'?<ShowAllFollowing following={followerFollowing.following} />:""}
              {/* {renderValue==='Post'?<UdashboardPostShow/>:""} */}
            </div>
            </div>
           
        </div>
      </div>
      <Toaster/>
    </>
  )
}

export default UserDashboard