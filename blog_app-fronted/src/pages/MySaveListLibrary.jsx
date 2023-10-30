import React, { useEffect, useState } from 'react'
import { BsPencil } from 'react-icons/bs'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import imag4 from '../assets/pexels-pixabay-220453.jpg'
import axios from 'axios'
import { baseURL } from '../config'
import DateFormate from '../components/DateFormate'
import { FiBookmark } from 'react-icons/fi'

const MySaveListLibrary = () => {

const [savePost,setSavePost] =  useState([]);
const [isPostUnSaved, setIsPostUnSaved] = useState(false)
const token = JSON.parse(localStorage.getItem('blogAuth'))?.token;

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '......';
    }
    return text;
  }

useEffect(()=>{
  
  const fetchAllLists = async()=>{
    try {
        const res = await axios.get(`${baseURL}/post/fetchAllSavedPost`,{
            headers:{
                "Content-Type" : 'application/json',
                Authorization:`Bearer ${token}`
            }
        })

        if(res.status===200){
            console.log('MySaveList->',res.data.data);
            setSavePost(res?.data?.data);
        }
    } catch (error) {
        console.log(error);
    }
    
}
fetchAllLists();
    

},[isPostUnSaved]);

const handleUnSavePost = async(e, postId)=>{
        try {
            // Make an API request to save the post
            const response = await axios.delete(`${baseURL}/post/unSavePost/${postId}`,{
              headers:{
                'ContentType':'application/json',
                Authorization:`Bearer ${token}`,
              }
            });
            if(response.status===200){
            console.log( response.data); 
            console.log("post unSaved successfully"); 
             // Remove the post ID from savedPosts in localStorage
        const blogUser = JSON.parse(localStorage.getItem('blogUser'));
        const updatedSavedPosts = blogUser.user.savedPost.filter(savedPost => savedPost.post !== postId);
        blogUser.user.savedPost = updatedSavedPosts;
        localStorage.setItem('blogUser', JSON.stringify(blogUser));
            setIsPostUnSaved(!isPostUnSaved);
         
            }
          } catch (error) {
            console.log('error unsavePost from list',error)
          }
        
}



  return (
    
    <div className='bg-[#F5F5F5]'>
    <div className='max-w-[1330px] m-auto '>
        <div className='flex flex-row justify-evenly px-2 sm:mx-5'>
     <div className='library-left w-full lg:min-w-[700px]  flex-grow-1 flex-shrink-0-1 flex-basis-auto auto min-h-[70vh] lg:border-r-2 border-gray-300'>
        <div className=' my-10'>
            <h1 className=' text-3xl font-bold '>Your Reading Lists({savePost?.length})</h1>
        </div>
        <div className='naviagtion-option'>
             <ul className='flex flex-row justify-start items-center gap-4  border-b-2 pb-2'>
                <li>firstThings</li>
                <li>SecondThings</li>
                <li>ThirdThings</li>
                <li>FourthThings</li>
                
             </ul>
        </div>
        
       {savePost.length===0?(
       <div className=' w-full lg:w-[90%] my-2 border-2 p-3  border-gray-400 rounded bg-white'>
            <div className='flex flex-col justify-center items-center min-h-[250px]'>
                <h1 className='text-2xl font-bold mb-1'>Your reading list is empty</h1>
                <p className='text-xl text-center'>Click the <span className='font-bold '> bookmark reaction</span><FiBookmark size={25} className='inline mx-1'/> when viewing a post to add it to your reading list.</p>
            </div>
        </div> ):

        (<div className='save-list-content'>
            {savePost.map((data)=>(
           <div key={data.post._id} className='list-box w-full lg:w-[90%] my-4 border-2 border-black p-3 rounded bg-white'>
                <div className='list-box-top flex flex-row justify-between items-center gap-x-2'>
                <div className=' flex flex-row justify-start items-center gap-x-4'>
                  <div className='userImage'>
                    <img src={`${baseURL}/UserImages/${data.post.author?.profileImg}`} alt="userImg" className='rounded-[50%] border-2 h-[55px] w-[50px] object-cover' />
                  </div>
                 <Link to={`/writer/${data.post.author._id}`}> <p>{data.post?.author.fname}{" "}{data.post?.author.lname} </p></Link>
                  <p>{DateFormate(data.post.createdAt)}</p>
                </div>
                <div onClick={(e)=>handleUnSavePost(e,data?.post._id)} className='py-1 px-3 rounded-[20px] bg-primary hover:bg-primary-dark text-white border-none active:scale-90 cursor-pointer transition-all duration-200 ease-linear'>Unsave</div>
                </div>
                <div className='list-box-bottom flex flex-col justify-center items-start gap-y-4 my-[2px]'>
                  <h1 className='text-2xl font-bold'>This is the topic of our post which is saved list </h1>
                  <p className='hidden sm:block'>{truncateText(data.post.description,100)}</p>
                  
                    <div className="flex items-center justify-between gap-x-4 w-full">
                    <div className='flex items-center gap-x-4 text-xs my-1'>
                    {(data.post.tags).map((tag,id)=>(
         <Link to={'#'} key={id} 
           href=""
           className="relative inline-block z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
         >
               {tag}
         
         </Link>
      ))}
                    </div>
                   
                    </div>
           </div>
           </div>
           ))}
        </div>)}

     </div>

     <div className='library-right max-w-[350px]  my-10 ml-5 hidden lg:block'>
        <div className='right-top-card w-[270px] h-[300px] rounded bg-[#399937] p-3'>
                   <p className='  text-2xl text-white text-bold text-center '>Write the post and share with others</p>
                   <div className=' mx-auto my-3 h-11 w-28 px-5 py-[6px] cursor-pointer active:scale-90 transition-transform duration-200 bg-black hover:bg-[#2a2929] text-white flex justify-center items-center rounded-[24px]'>Write<BsPencil size={15} className='inline ml-2 font-bold'/></div>
                   <div className='rounded-[10px] bg-[#4bc649] mt-8  text-center text-xl py-2 '>
                    Thank you and appreciate to you to stay with us.
                   </div>
        </div>
        <div className='right-bottom-card w-[270px] h-[300px] rounded bg-white  p-3 text-center'>
            <h1 className='font-medium text-xl my-2'>Connect with blogWeb</h1>
            <div className='w-[90%] mx-auto rounded-[20px] bg-gray-100 hover:bg-gray-200 cursor-pointer border-2 text-center flex flex-row justify-between items-center px-2 py-2 my-2'><FaXTwitter size={23} className='inline'/> Twittre <div></div></div>
            <div className='w-[90%] mx-auto rounded-[20px] bg-gray-100 hover:bg-gray-200 cursor-pointer border-2 justify-between text-center flex flex-row items-center px-2 py-2 my-2'><FaFacebook size={23} className='inline text-blue-500'/> Facebook <div></div></div>
            <div className='w-[90%] mx-auto rounded-[20px] bg-gray-100 hover:bg-gray-200 cursor-pointer border-2 text-center flex flex-row justify-between items-center px-2 py-2 my-2'><FaYoutube size={23} className='inline text-red-500'/> YouTube <div></div></div>
            </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default MySaveListLibrary