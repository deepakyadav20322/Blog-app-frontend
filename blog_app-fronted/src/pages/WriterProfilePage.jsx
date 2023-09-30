import React, { useEffect, useState } from 'react'
import img3 from'../assets/userLogo.jpg'
import { BsThreeDots } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';
import { FaBirthdayCake } from 'react-icons/fa';
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import axios from 'axios';
import { baseURL } from '../config';
import formatDate from '../components/DateFormate';
import FirstDoLoginPopUp from '../components/FirstDoLoginPopUp';
import toast,{Toaster} from 'react-hot-toast'



const WriterProfilePage = () => {
   
    const[reportBoxopen,setReportBoxOpen] = useState(false);
    const[followStatus,setFollowStatus] = useState(false);
    const[allowedPopUp,setAllowedPopUp] = useState(false);
    const[userInfo,setUserinfo] = useState("");
    const[AllUserPost,setUserAllPost] = useState([]);
   const {userId} = useParams();
   const token = JSON.parse(localStorage.getItem('blogAuth'))?.token;
   const selfUserId = JSON.parse(localStorage.getItem('blogUser'))?.user._id;
   const navigate = useNavigate();
   const  fetchUserData = async()=>{
    try {
        const res = await axios.get(`${baseURL}/user/getRandomUserInfo/${userId}`);
          if(res.status==200){
            console.log(res.data.data);
            setUserinfo(res.data.data);
          }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error=='Invalid userId ID') {
       
        const errorMessage = (error.response.data.error);
        toast.error(errorMessage);
      } else {
        toast.error('Sothing went wrong!');
    }
        console.log(error)
    }
    }
   const  getAllPostToSpecificUser = async()=>{
    try {
        const res = await axios.get(`${baseURL}/post/getAllPostToSpecificUser/${userId}`);
          if(res.status==200){
            console.log(res.data.data);
            setUserAllPost(res.data.data);
          }
    } catch (error) {
      if (error.response && error.response.status === 400 && error.response.data.error=='Invalid userId ID') {
       
        const errorMessage = (error.response.data.error);
        toast.error(errorMessage);
         navigate('/Error')
      } else {
        toast.error('Sothing went wrong!');
    }
        console.log(error)
    }
    }
    
    const UserFollow = async(id)=>{
          try {
            const res = await axios.get(`${baseURL}/user/userFollow/${id}`,{
                headers:{
                'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            });
            if(res.status===200){
                console.log('You are follow to writer successfull');
                setFollowStatus(!followStatus)
            }
          } catch (error) {
            console.log("UserFollow error",error);
          }
    }
    const UserUnFollow = async(id)=>{
          try {
            const res = await axios.get(`${baseURL}/user/userUnFollow/${id}`,{
                headers:{
                'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
                });
            if(res.status===200){
                console.log('You are Unfollow to writer successfull');
                setFollowStatus(!followStatus)
            }
          } catch (error) {
            console.log("UserUnFollow error",error);
          }
    }

    useEffect(()=>{
        fetchUserData();
        getAllPostToSpecificUser()
    },[followStatus])

    console.log('equality',userId!==selfUserId)
     
  return (
    <div className='bg-[#F5F5F5]'>
         <div className='w-full  min-h-[475px] m-auto  bg-[#F5F5F5] relative'>
          <div className={`relative h-40 w-full flex items-end justify-center `} style={{backgroundColor:`${userInfo.brandColor?userInfo.brandColor:"black"}`}}>

            <div className='absolute max-w-[1000px] w-full bg-white rounded-[6px] min-h-[22rem] top-[50%] custome-shadow p-2'>
           
            <div className='text-right mr-8 mt-3'>
                {!token   && (<button onClick={()=>setAllowedPopUp(true)} className='bg-[#3bdf6a] mr-3 px-4 py-2 rounded outline-none font-bold text-white'>Follow</button>)}
                {allowedPopUp?<FirstDoLoginPopUp setAllowedPopUp={setAllowedPopUp} />:""}
                {(!token ?"" : (userInfo?.followers)?.length !== 0  && (userInfo._id!==(selfUserId)) && userInfo.followers?.includes(selfUserId)?(
                <button onClick={()=>UserUnFollow(userInfo._id)} className='bg-gray-200 mr-3 px-4 py-2 rounded outline-none font-bold text-black'>Following</button>):
                ( (userInfo._id!==(selfUserId)) && <button onClick={()=>UserFollow(userInfo._id)} className='bg-[#3B49DF] mr-3 px-4 py-2 rounded outline-none font-bold text-white'>Follow</button>))
                }
                <div className=' inline relative'>
                    <BsThreeDots size={35} onClick={(e)=>{setReportBoxOpen(!reportBoxopen); }} className='inline hover:bg-gray-200 rounded py-2 px-2 cursor-pointer'/>
                  <div className={`absolute  text-left  top-[180%] right-[5%] h-20 md:w-[220px] w-[180px] border-2 z-30 text-black bg-white p-2 py-3 ${reportBoxopen?'block':'hidden'} custome-shadow rounded`}>
                       <p className='cursor-pointer'>Report abuse</p>
                       <p className='mt-1 cursor-pointer'>Blocked user</p>
                  </div>
                </div>
            </div>
            <div className='Information-box  mt-12'>
            <h1 className='text-3xl font-extrabold text-center'>{userInfo.fname}</h1>
            <p className='text-center  max-w-2xl w-full m-auto mt-4'>👨‍💻{userInfo.bio}.</p>
            <div className='flex flex-row flex-wrap justify-center gap-x-12 gap-y-3 items-center mt-2'>

                <div className='mr-5'><FaLocationDot size={20} className={` mr-2 ${userInfo.location?'inline':'hidden'}`} /><span>{userInfo?.location}</span></div>
        <div className='mr-5'><FaBirthdayCake size={20} className='inline mr-2' /><span>Joined {formatDate(new Date(userInfo.createdAt))}</span></div>
                <div className='mr-5'><GrMail size={20} className='inline mr-2' /><a href = {`mailto: ${userInfo.email}`} className='hover:text-blue-500'>Email</a></div>
                <div className='mr-5'><AiFillGithub size={30} className='inline mr-2'/><AiOutlineTwitter size={25} className='inline' /></div>
            </div>
           
            </div>
            <div className='border-t-[1px] border-gray-300 mt-4 pt-6 flex flex-col justify-center items-center'>
                <p>Work</p>
                {userInfo.work? <p className='max-w-xl  w-full text-center m-auto mb-1'>{userInfo?.work}</p>
           : <div className='text-gray-400'>--------------------------------    Not Given   ---------------------------------</div> }
            </div>
            
            </div>
            
            </div>
            <div className='absolute w-36 h-36 bg-black rounded-full top-[4%] lg:left-[44%] md:left-[35%] sm:left-[15%] left-[10%] overflow-hidden border-2'><img src={img3}   alt="" className='bg-black object-cover'  /> 
            
         </div>
        </div>
        
        
        <div className='max-w-[1000px] w-full  min-h-[600px] m-auto flex flex-row justify-between gap-x-4 '>
        <div className='left hidden lg:block max-w-[320px] w-full h-48 mt-3 '>
          
           <div className='custome-shadow mb-4 rounded bg-white '>
            <h1 className='text-xl font-medium border-b-[1px] border-gray-200 py-3 px-5'>Skill/Language</h1>
            <p className='text-gray-600 text-[xl] px-5 py-2'>{userInfo.skillLanguage ?userInfo?.skillLanguage:"Not given"}</p>
           </div>

           <div className='custome-shadow mb-4 rounded bg-white '>
            <h1 className='text-xl font-medium border-b-[1px] border-gray-200 py-3 px-5'>Currently Learning</h1>
            <p className='text-gray-600 text-[xl] px-5 py-2'>{userInfo.currentLearning ?userInfo?.currentLearning:"Not given"}</p>
           </div>

           <div className='custome-shadow mb-4 rounded bg-white '>
            <h1 className='text-xl font-medium border-b-[1px] border-gray-200 py-3 px-5'>Available</h1>
            <p className='text-gray-600 text-[xl] px-5 py-2'>{userInfo.available ? userInfo?.available:"Not given"}</p>
           </div>
           
        </div>
        <div className='right w-full p-3'>
    {AllUserPost.length ==0 && <div className='text-center text-xl font-bold border-2 flex flex-row justify-center items-center border-gray-300  m-1 h-32'> No any Post available </div> }
            {AllUserPost.map((post)=>(
        <article key={post._id} className="flex bg-white  w-full lg:mx-0 lg:max-w-2xl flex-col items-start justify-between p-3 rounded-[6px] shadow-sm border border-gray-300 my-4 sm:my-1">
       
       <div className="group relative">
       <div className="relative mt-5 flex items-center gap-x-4">
         <img src="" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
         <div className="text-sm leading-6">
           <p className="font-semibold text-gray-900">
             <Link >
               <span className="absolute inset-0" />
               {post.author.fname}{" "}{post.author.lname}
               
             </Link>
           </p>
           {/* <p className="text-gray-600">{post.author.role}</p> */}
           <time dateTime={post.createdAt} className="text-gray-500">
           {formatDate(new Date(post.createdAt))}
         </time>
         </div>
         
       </div>
         <h3 className="mt-3 ml-5 text-2xl font-semibold leading-6 text-gray-900 ">
           <Link to={`/singleBlog/${post._id}`} className='leading-[2rem]' >
             <span className="absolute inset-0" />
             {post.title}
           </Link>
         </h3>
       </div>
       
       <div className="flex items-center justify-between gap-x-4 w-full ml-5">
         <div className='flex items-center gap-x-4 text-xs my-3 flex-wrap '>
       {(post.tags).map((tag,id)=>(
        <Link to={'#'} key={id} 
          href=""
          className="relative inline-block z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200 mt-1"
        >
              {tag}
        </Link>
        
     ))}
    
     </div>
    
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className=''>
            <span className='mx-3'>Like 15</span>
            <Link><span className=' cursor-pointer'>comments{" "}{post?.comments.length}</span></Link>
        </div>
        <div className=''>3 min read</div>
     </div>
     </article>
     ))}
        </div>
        </div>
  
  <Toaster/>  
    </div>
  )
}

export default WriterProfilePage