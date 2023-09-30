import React,{useEffect,useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import {FaRegShareFromSquare} from 'react-icons/fa6'

import { Link, useParams } from 'react-router-dom'
import {LuDot} from 'react-icons/lu'
import axios from 'axios'
import imag4 from '../assets/pexels-pixabay-220453.jpg'
import FirstDoLoginPopUp from '../components/FirstDoLoginPopUp'
import toast,{Toaster} from 'react-hot-toast'
import { FiBookmark } from 'react-icons/fi'


const SingleBlog = () => {

const baseURL = 'http://localhost:3001'
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(false);
    const [apiCalled, setApiCalled] = useState(false);
    const [btnShow, setBtnShow] = useState(false);
    const [commentAllowedPopUp, setCommentAllowedPopUp] = useState(false);
    const [postSavedAllowedPopUp, setPostSavedAllowedPopUp] = useState(false);
    const [isPostSaved, setIsPostSaved] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showSaveTooltip, setSaveShowTooltip] = useState(false);

    const [commentData, setCommentData] = useState({commentText:""});
    const [allPostedComment, setAllPostedComment] = useState([]);
    const userId = JSON.parse(localStorage.getItem('blogUser'))?.user?._id;
    const blogUser = JSON.parse(localStorage.getItem('blogUser'))?.user;
    const token = JSON.parse(localStorage.getItem('blogAuth'))?.token;

    const options = {
      timeZone: "Asia/Kolkata", // Indian Standard Time (IST)
      year: "numeric",
      month: "short",
      day: "numeric",
    };

    useEffect(() => {
      if (!apiCalled) {    
      var  fetchSingleBlogPost  = async ()=>{
         try {
          setLoading(true)
        const res = await axios.get(`${baseURL}/post/getSinglePost/${blogId}`);
        if(res.status===200){
            console.log("single blog post => ",res.data);
            setBlog(res.data);
            setAllPostedComment((res.data.comments).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
            setLoading(false)
        }
      } catch (error) {
        console.log('error fetchig single post')
                 toast.success('error 400');
                 setLoading(false)
   }
      setApiCalled(true);
    }
fetchSingleBlogPost();
}
    }, [blogId]);


    const handleTextAreaClick = (e)=>{
      e.preventDefault()
      if(token){
        setCommentAllowedPopUp(false);
        setBtnShow(true)
      }else{
        setCommentAllowedPopUp(true);
        setBtnShow(false)
      }
    }

    const handleSavePostIcon = (e)=>{
      e.preventDefault()
      if(token){
        setPostSavedAllowedPopUp(false);
        handleSaveClick()
      }else{
        setPostSavedAllowedPopUp(true);
       
      }
    }

const handleCommentOnSubmit = async(e)=>{
        e.preventDefault();
 try {

  const res = await axios.post(`${baseURL}/post/addCommentToPost/${blogId}`,commentData,{
    headers:{
      'ContentType':'application/json',
      Authorization:`Bearer ${token}`,
    }
  })
  if(res.status===200){
    console.log('comment send successfully')
    console.log(res.data.data);
    const newComment = res.data.data;
    newComment.createdAt = new Date()
    newComment.author = {fname:blogUser.fname , lname:blogUser.lname};
    setCommentData({commentText:""});
    console.log(newComment)
    setAllPostedComment((prevComments) => [...prevComments, newComment].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
    console.log("all posted comment bbbb ->",allPostedComment);
  }
  
 } catch (error) {
  console.log(error);
 }
}

const toggleTooltip = () => {
  setShowTooltip(!showTooltip);
};
const toggleSecondTooltip = () => {
  setSaveShowTooltip(!showSaveTooltip);
};

// ----------------------------------------------------------------------
const handleSaveClick = async () => {
   const postId = blog._id;
    if (isPostSaved) {
      // Remove the post from saved posts (call remove API)
     const removePostFromSaved=async()=>
     {
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
        toast.success('Post remove into reading List',{
          duration:3000,
          className:'toasti',
          position:'bottom-right',
          
        })
        // Remove the post ID from savedPosts in localStorage
        const blogUser = JSON.parse(localStorage.getItem('blogUser'));
      const updatedSavedPosts = blogUser?.user.savedPost.filter(savedPost => savedPost.post !== blogId);
      blogUser.user.savedPost = updatedSavedPosts;
      localStorage.setItem('blogUser', JSON.stringify(blogUser));
        }
      } catch (error) {
        console.log(error)
      }
    };
    removePostFromSaved();

    } else {
      // Save the post (call save API)
      const savePost= async()=>
      {
       try {
         // Make an API request to save the post
         const response = await axios.post(`${baseURL}/post/savePost/${postId}`,{},{
          headers:{
            'ContentType':'application/json',
            Authorization:`Bearer ${token}`,
          }
        })

         if(response.status===200){
         console.log( response.data); 
         console.log("post saved successfully"); 
         toast.success('Post add into reading List',{
          duration:3000,
          className:'toasti',
          position:'bottom-right',
        })
         // Add the post ID to savedPosts in localStorage
         const blogUser = JSON.parse(localStorage.getItem('blogUser'));
         blogUser?.user.savedPost.push({ post: blogId, createdAt: new Date() });
         localStorage.setItem('blogUser', JSON.stringify(blogUser));
         }
       } catch (error) {
         console.log(error)
       }
     };
     savePost();
    }

    // Toggle the saved state in the component's state
    setIsPostSaved(!isPostSaved);
  
};

// ----------------------------------------------------------------------

useEffect(() => {
  const savedPosts = JSON.parse(localStorage.getItem('blogUser'))?.user?.savedPost;
  console.log('array check',savedPosts)
  const exists = savedPosts?.some(savedPost => savedPost.post === blogId);
  console.log('exist',exists)
  setIsPostSaved(exists);
}, [blogId]);

// ----------------------------------------------------------------------
//-----------------------------------------------------------------------
  
    if (loading) {
    return(  <div className='border border-blue-300 shadow rounded-md p-4 max-w-[700px] w-full mx-auto'>
      <div className='animate-pulse flex space-x-4'>
        <div className='rounded-full bg-slate-200 h-10 w-10'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-2 bg-slate-200 rounded w-[80%]'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-2 bg-slate-200 rounded col-span-2 w-[60%]'></div>
              <div className='h-2 bg-slate-200 rounded col-span-1 w-[30%]'></div>
            </div>
            <div className='h-2 bg-slate-200 rounded w-[90%]'></div>
          </div>
        </div>
      </div>
    </div>)
    }
  if(!blog && !loading){
   <div className='flex justify-center items-center min-h-[100vh] md:min-h-[40vh]'>
                 <div className='border-2 border-gray-300 rounded flex flex-row justify-center items-center p-10'>
                   <div className='text-4xl font-bold'>No post available for this postId </div>
                   </div>
    </div> }

  return (
    <>
    {blog && (<div>
          <div className='break-words bg-[#F5F5F5]'>
            <div className='flex justify-center pb-4 '>
                <div className='max-w-[700px] px-3 sm:px-10  w-full bg-white'>
                 <div className='block w-full'>
                    <h1 className='w-full tracking-tighter-[-0.011em] sm:tracking-tighter-[-0.014em] sm:leading-[2.8rem] leading-9 mb-8 sm:mb-6 sm:text-[40px] text-3xl font-bold text-[#242424] sm:mt-12 mt-8'>{blog.title}</h1>
                    <div className=''>
                        <div className='flex flex-col justify-between'>
            <div className='block w-full'>
                <div className='flex '>
                    <div className=''>
                        <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="h-10 w-12 border-2 mt-1 rounded-[50%] bg-gray-50" />
                    </div>
                    <div className='ml-3 w-full flex flex-col'>
                        <div>{(blog.author).fname} {" "}{(blog.author).lname}</div>
                        <div><span className='mx-1'>Follow</span><span>{new Date(blog.createdAt).toLocaleString("en-US", options)}</span></div>

                    </div>
              <div className={`${userId===blog.author._id?'flex':"hidden"} rounded  py-2 sm:py-0 sm:flex-row sm:justify-center flex-col items-center justify-center sm:items-center bg-[#FEF5E6] h-12 sm:h-9 text-sm mr-2`}><div className=''> 
              <Link className='mx-2 my-1 ms:my-0 hover:border-b-2 border-blue-500 hover:text-blue-500 transition-all duration-150' to={`/updatePost/${blog._id}`} >Edit</Link> </div>
               <div className='mx-2 hover:border-b-2 border-blue-500 hover:text-blue-500 transition-all duration-150'>Manage</div>
                </div>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-7 border-t-[0.2px] border-b-[0.2px] border-gray-200 py-2'>
               <div className='flex flex-row gap-4'>
               <span className='hover:text-red-500'>
                    <AiOutlineHeart size={25} className='inline cursor-pointer hover:text-red-500'/>
                    15
                    </span>
                    <span className='relative'>
                    <a href='#comment-section' className='hover:text-blue-500' onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
                    <FaRegCommentDots size={22}  className='hover:text-blue-500 inline cursor-pointer mr-1'/>
                    {allPostedComment?.length}
                    </a>
                    <div className={`${ showTooltip ? 'visible' : 'hidden'} absolute w-28 leading-4 h-10 pt-[2px] bg-gray-900 opacity-90 text-white rounded top-[136%] left-[-1.2rem] text-center text-sm`}>
                      Jump to comment
                    </div>
                    </span>
                   
                 </div>
                 <div className='flex flex-row gap-4'>
                    
                    <FaRegShareFromSquare size={25} className='inline cursor-pointer hover:text-green-500' />
                 
                 <span className='relative'>
                    <FiBookmark onClick={handleSavePostIcon} size={22}  onMouseEnter={toggleSecondTooltip} onMouseLeave={toggleSecondTooltip}  className={`${isPostSaved?'fill-black':""}  inline cursor-pointer`}/>
                    <div className={`${ showSaveTooltip ? 'visible' : 'hidden'} absolute w-28 leading-4 h-9 pt-[7px] bg-gray-900 opacity-90 text-white rounded top-[136%] left-[-1.6rem] text-center text-sm`}>
                      Click to {!isPostSaved?' save ':'unsave'}
                    </div>
                    </span>
                 </div>
            </div>
                        </div>
                    </div>
                 </div>
                 <figure className='mt-10 object-cover flex flex-col items-center justify-center'>
                 <img src="https://www.w3schools.com/tags/pic_trulli.jpg" alt="Trulli" className='w-full max-w-[640px]'/>
                  <figcaption className="text-center">Fig.1 - Trulli, Puglia, Italy.</figcaption>
                 </figure>
                 <div className='blog-main-content my-3'>
                   {blog.content}
                    
                 </div>

              <section id='comment-section' className='comment-section border-t-2 border-gray-400 mt-2 sm:mt-10'>
                <div className='mb-3'>
                <div className=' text-2xl font-medium ont-bold mt-6 mb-3'> Top comments ({allPostedComment?.length})</div>
            
                <div>
                  <form onSubmit={handleCommentOnSubmit}>
              
              
                      <textarea className={`border-2 p-3 text-[18px] border-black min-w-[350px] w-full min-h-[100px] transition-all duration-150 rounded resize-none }`} onClick={handleTextAreaClick} name="commentText" id="" placeholder='Add to discussion' value={commentData.commentText} onChange={(e)=>setCommentData({...commentData,commentText:e.target.value})}>
                  </textarea>
                  <div className={`${(btnShow && token )?'flex':'hidden'} flex-row justify-end items-cenetr py-2 px-2`}>
                  <button  disabled={commentData?.commentText?.length === 0} type='submit' className={`px-3 py-2 rounded  mx-2 ${(commentData?.commentText?.length==0) ?'bg-[#8992EC] text-[white] cursor-not-allowed':"bg-green-600 text-white"}`}>Save</button>
                    
                    </div>
                    </form>
                </div>
                </div>
          {/* --------------------------------------  coment output section---------------- */}
          {allPostedComment && allPostedComment.map((comment,idx)=>(
                          <div key={idx} className= ' flex flex-row justify-start items-start gap-x-1 my-4'>
                          <div className=''><img src={imag4} alt="userImg" className=' object-cover  rounded-[50%] h-[48px] w-[45px] border-2' /></div>
                          <div className='w-full border-[1px] rounded border-gray-300'>
                            <div className='text-sm flex flex-row justify-start items-center my-3 pl-2 border-b-[1px] border-gray-300'><span className='font-medium'>{comment.author?.fname}{" "}{comment.author?.lname}</span> <span><LuDot className="inline" size={20} /></span> <span>{new Date(comment.createdAt).toLocaleString("en-US", options)}</span> <span className='ml-2'>Edited on March 6 2023</span>
                            </div>
                            <div className='mx-3 my-1'>
                            <div>{comment.commentText}</div>
                            </div>
                          </div>
                        </div>
          ))}

              </section>

            </div>
            </div>
            </div>
            {(commentAllowedPopUp) && <FirstDoLoginPopUp setAllowedPopUp ={setCommentAllowedPopUp} />}
            {(postSavedAllowedPopUp) && <FirstDoLoginPopUp setAllowedPopUp={setPostSavedAllowedPopUp} />}
           
          
    </div>)}
    
    <Toaster/>
    </>
          
  )
}

export default SingleBlog