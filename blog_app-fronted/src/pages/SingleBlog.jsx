import React,{useEffect,useState} from 'react'
import {AiOutlineHeart, AiOutlineMail, AiTwotoneHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'

import { Link, useNavigate, useParams } from 'react-router-dom'
import {LuDot} from 'react-icons/lu'
import axios from 'axios'
import imag4 from '../assets/pexels-pixabay-220453.jpg'
import FirstDoLoginPopUp from '../components/FirstDoLoginPopUp'
import toast,{Toaster} from 'react-hot-toast'
import { FiBookmark } from 'react-icons/fi'
// It use to convert html content to readable content
import DOMPurify from 'dompurify';
import ScrollUpDown from '../components/ScrollUpDown'
import ShareIconDropDown from '../components/ShareIconDropDown'
import { baseURL } from '../config'
import socket from '../helper/SocketConfig'
import userLogo from '../assets/userLogo.jpg'
import moment from 'moment';
import formatDate from '../components/DateFormate'
const SingleBlog = () => {


// const baseURL = 'http://localhost:3001'
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
    const [allLikes, setAllLikes] = useState([]);
    const [realTimeallLikes, setrealTimeAllLikes] = useState([]);
    const userId = JSON.parse(localStorage.getItem('blogUser'))?.user?._id;
    const blogUser = JSON.parse(localStorage.getItem('blogUser'))?.user;
    const token = JSON.parse(localStorage.getItem('blogAuth'))?.token;
    const[followStatus,setFollowStatus] = useState(false);
    const[allowedPopUp,setAllowedPopUp] = useState(false);
    const[likeAllowedPopUp,setLikeAllowedPopUp] = useState(false);
    const navigate = useNavigate();  
    const [userRecomenPosts,setUserRecomenPosts] = useState([]);

    const options = {
      timeZone: "Asia/Kolkata", // Indian Standard Time (IST)
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const currentURL = window.location.href; // Get current URL and copy to clipboard
    const likeStateToggle = realTimeallLikes.length>0 ?realTimeallLikes: allLikes;

// -------------------------- Follow nad unfollow logic ---------------------------

const UserFollow = async(id)=>{
  try {
    const res = await axios.get(`${baseURL}/user/userFollow/${id}`,{
        headers:{
        'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
        }
    });
    if(res.status===200){
        console.log('You are follow to writer successfull',res.data.data);
        localStorage.setItem('blogUser',JSON.stringify({user:res.data.data}))
        setFollowStatus(!followStatus);
        setApiCalled(false);
        toast.success(`You follow to  ${blog?.author.fname}  ${blog?.author.lname}`, {
          duration:2500,
          className:'toasti',
          position:'bottom-right',
          style:{
            width:'320px'
          }
        })
        socket.emit('userFollow',  {user:res.data.data });
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
        console.log('You are Unfollow to writer successfull',res.data.data);
        localStorage.setItem('blogUser',JSON.stringify({user:res.data.data}))
        setFollowStatus(!followStatus)
        setApiCalled(false);
        toast.success(`You Unfollow to ${blog?.author.fname}  ${blog?.author.lname}`, {
          duration:2500,
          className:'toasti',
          position:'bottom-right',
          style:{
            width:'320px'
          }
        } )
        socket.emit('userUnFollow', {user:res.data.data });
    }
  } catch (error) {
    console.log("UserUnFollow error",error);
  }
}


// ---------------------------------------------------------------------------------

     

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
            setAllLikes(res.data.likes);
            setLoading(false)
        }
      } catch (error) {
        if (error.response && error.response.status === 400 && error.response.data.error=='Invalid post ID') {
       
          const errorMessage = (error.response.data.error);
          toast.error(errorMessage);
           navigate('/Eroor')
        } else {
          toast.error('Sothing went wrong!');
      }
        console.log('error fetchig single post',error)
                 
                 setLoading(false)
   }
      setApiCalled(true);
    }

              // <-----------------Get this user all post for recommendation ---------> 
              const getAllPostsUserRecomendation = async()=>{
                try {
                  const res = await axios.get(`${baseURL}/post/getAllPostsOfUserRecomendation/${blogId}`)
                  if(res.status===200){
                    console.log('user spaecific data success')
                    console.log('recomendation data=> ',res.data.data);
                    setUserRecomenPosts(res.data.data);
                  }
                  
                } catch (error) {
                  console.log(error);
                  setApiCalled(true);
                }
              }
              getAllPostsUserRecomendation()

fetchSingleBlogPost();
console.log("status")
}
},[blogId,followStatus]);

// ---------------------------------Socket connetion ---------------------------------------

useEffect(() => {
  // Listen for real-time postLiked events
  socket.on('postLiked', (likes) => {
    console.log('socket like run',likes)
    setrealTimeAllLikes(likes)
  });

  // Listen for real-time postDisliked events
  socket.on('postUnliked', (likes) => {
    console.log('socket unlike run',likes)
    setrealTimeAllLikes(likes)
  });

  return () => {
    socket.off('postLiked');
    socket.off('postUnliked');
  };
  
}, [blogId]);


const handleLike = async(id) => {

    try {
      const res = await axios.get(`${baseURL}/post/likePost/${id}`,{
        headers:{
        'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
        }
        });
     if(res.status==200){
      console.log(res.data.data.likes);
        setAllLikes(res.data.data.likes);
    
     }
    // Emit a likePost event to the server
    socket.emit('likePost',res.data.data.likes);
    } catch (error) {
      console.log(error)
    }
    
  
};

const handleUnlike = async(id) => {

    try {
      const res = await axios.get(`${baseURL}/post/unlikePost/${id}`,{
        headers:{
        'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
        }
        });
     if(res.status==200){
      console.log('unlike post',res.data.data.likes);
     

        setAllLikes(res.data.data.likes);
     }
    // Emit a likePost event to the server
    socket.emit('UnlikePost',res.data.data.likes);
    } catch (error) {
      console.log(error)
    }
    
  
};

// -------------------------------------------------------------------------
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
    newComment.author = {fname:blogUser.fname , lname:blogUser.lname,profileImg:blogUser.profileImg};
    
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
    return(  <div className='border border-blue-300 shadow rounded-md py-4 px-2 max-w-[700px] w-full mx-auto'>
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
                <div className='max-w-[730px] px-3 sm:px-6  w-full bg-white'>
                 <div className='block w-full'>
                    <h1 className='w-full tracking-tighter-[-0.011em] sm:tracking-tighter-[-0.014em] sm:leading-[2.8rem] leading-9 mb-8 sm:mb-6 sm:text-[40px] text-3xl font-bold text-[#242424] sm:mt-12 mt-8'>{blog.title}</h1>
                    <div className=''>
                        <div className='flex flex-col justify-between'>
            <div className='block w-full'>
                <div className='flex '>
                    <Link to={`/writer/${blog?.author._id}`} className=''>
                        <img className='h-10 w-12 object-cover rounded-[50%] mt-1' src={blog?.author?.profileImg ? `${baseURL}/UserImages/${blog?.author.profileImg}`:userLogo} />
                    </Link>
                    <div className='ml-3 w-full flex flex-col'>
                     <span>  <Link className='hover:text-blue-500 inline' to={`/writer/${blog?.author._id}`}>{(blog.author).fname} {" "}{(blog.author).lname}</Link> </span> 
                        <div>
                          {/* <span className='mx-1'>Follow</span> */}
                          <span>{new Date(blog.createdAt).toLocaleString("en-US", options)}</span></div>

                    </div>
              <div className={`${userId===blog.author._id?'flex':"hidden"} rounded  py-2 sm:py-0 sm:flex-row sm:justify-center flex-col items-center justify-center sm:items-center bg-[#FEF5E6] h-12 sm:h-9 text-sm mr-2`}><div className=''> 
              <Link className='mx-2 my-1 ms:my-0 hover:border-b-2 border-blue-500 hover:text-blue-500 transition-all duration-150' to={`/updatePost/${blog._id}`} >Edit</Link> </div>
               <div className='mx-2 hover:border-b-2 border-blue-500 hover:text-blue-500 transition-all duration-150'>Manage</div>
                </div>
                </div>
            </div>
            <div className='flex flex-row justify-between mt-7 border-t-[0.2px] border-b-[0.2px] border-gray-200 py-2'>
               <div className='flex flex-row gap-4'>
 {/*------------- All logics for likes and unlikes----------- */}
               <span className='hover:text-black'>
                   {!token  && <AiOutlineHeart size={25}  onClick={()=>setLikeAllowedPopUp(true)} className='inline cursor-pointer text-green-500'/>}
                   {token &&  (blog.author._id === userId) && <AiOutlineHeart  size={25} className='inline cursor-not-allowed text-gray-300'/>}
                   {likeAllowedPopUp?<FirstDoLoginPopUp setAllowedPopUp={setLikeAllowedPopUp} />:""}
                   {likeAllowedPopUp?<FirstDoLoginPopUp setAllowedPopUp={setLikeAllowedPopUp} />:""}
                 {token && likeStateToggle?.length>=0  && likeStateToggle?.includes(userId) && (blog.author._id != userId)?  <AiTwotoneHeart onClick={()=>handleUnlike(blog._id)} size={25} className='inline cursor-pointer text-red-500'/>:(token && (blog.author._id != userId)  && <AiOutlineHeart onClick={()=>handleLike(blog._id)} size= {25} className='inline cursor-pointer'/>)}
                    {likeStateToggle?.length}
                    </span>
  {/* -------------------------***************---------------------- */}
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
                    
                 {/* <FaRegShareFromSquare size={25} className='inline cursor-pointer hover:text-green-500' /> */}
             <ShareIconDropDown currentURL={currentURL} className='inline cursor-pointer hover:text-green-500' />
                 
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
                 <img src={`${baseURL}/BlogImages/${(blog.mainImage)}`} alt="Trulli" className='w-full max-w-[640px]'/>
                  <figcaption className="text-center">Fig.1 - Trulli, Puglia, Italy.</figcaption>
                 </figure>
                 <div className='blog-main-content my-3'>
                   {/* {blog.content} */}
                   {/*----- convert html content to readable content-----------  */}
                   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }} />

                    <div className='flex justify-start items-center gap-x-4 gap-y-1 my-10 ml-4 flex-wrap '>
                    {(blog.tags).map((tag,id)=>(
                    <Link to={'#'} key={id} 
                    href=""
                    className="relative inline-block z-10 rounded-full bg-gray-100 text-base px-4 py-2  font-normal text-gray-600 hover:bg-gray-200"
                    >
                    {tag}
                    </Link>
                    ))}
                    </div>
                 </div>

    {/* ------------------------ Bottom profile and follow button show ----------------------------------- */}
                    <div className='bg-[#F9F9F9]  w-full md:mt-16 px-8 py-10 border-b-2 border-gray-300 my-4 flex flex-col justify-start'>
                      <div className='flex flex-row justify-between items-center'>
                        <img src={blog?.author?.profileImg ? `${baseURL}/UserImages/${blog?.author.profileImg}`:userLogo} alt="" className='h-[90px] w-[90px] rounded-full border-2 object-cover' />
                        <div className='flex flex-row justify-center items-center gap-x-3'>
                        {!token   && (<button onClick={()=>setAllowedPopUp(true)} className='bg-[#1A8917] text-white px-3 py-2 font-bold rounded-[20px]'>Follow</button>)}
                        {allowedPopUp?<FirstDoLoginPopUp setAllowedPopUp={setAllowedPopUp} />:""}
                        
                          {(!token ?"" : (blog.author?.followers)?.length !== 0  && (blog.author?._id!==(userId)) && blog.author?.followers?.includes(userId))?
                           ( <button onClick={()=>UserUnFollow(blog.author?._id)} className='bg-[#1A8917] text-white px-3 py-2 font-bold rounded-[20px]'>Following</button>):
                           ((token && blog.author?._id!==(userId)) &&<button onClick={()=>UserFollow(blog.author._id)} className='bg-[#1A8917] text-white px-3 py-2 font-bold rounded-[20px]'>Follow</button>)
                          }
                        
                        <AiOutlineMail size={35} color='white' className='p-1 cursor-pointer rounded-full bg-[#1A8917] flex items-center h-full' />
                        </div>
                      </div>
                       <p className='text-2xl font-bold mt-2'>Written by {blog.author.fname}{blog.author.lname}</p>
                      <p>{blog.author?.followers.length} Followers</p>
                      <p className=' text-sm mt-3 pb-5 border-b-[1px] border-[rgb(229, 229, 229)] '>{blog.author?.bio}</p>
                      
                     <div className='py-8 mx-auto '>
                        <h2 className='mt-4 mb-8 text-base font-medium'>More from {blog.author.fname}{" "} {blog.author.lname}</h2>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-3 mx-auto w-full gap-y-6 border-b-2 border-gray-200'>
                          {userRecomenPosts && userRecomenPosts.map((recom)=>(
                          <div key={recom._id} className='flex flex-col'>
                           <Link to={`/singleBlog/${recom._id}`}> <img className='w-[345px] h-[172px] object-cover  cursor-pointer  hover:scale-105 transition-all duration-200' src={`${baseURL}/BlogImages/${recom.mainImage}`} onClick={()=>setApiCalled(false)} alt="" /> </Link> 
                            <div className='flex flex-row mt-3 mb-3 gap-x-3'>
                              <img className='h-8 w-8 rounded-full ' src={blog?.author?.profileImg? blog.author?.profileImg:userLogo} alt="photos" />
                              <p className='pt-2 text-sm text-[#242424]'>{blog.author.fname}{" "}{blog.author.lname}</p>
                              
                            </div>
                          <Link  to={`/singleBlog/${recom._id}`} className='inline'><h2 onClick={()=>setApiCalled(false)} className='text-xl text-[#242424] font-bold hover:text-blue-500'>{recom.title}</h2></Link> 
                            {/* <p>{blog.description}</p> */}
                            <div className='flex flex-row justify-between text-[13px] mx-2 text-gray-600 my-2  pb-3'>
                             <p> {formatDate(recom.createdAt)}</p> 
                             <p>{recom.readTime}{" "}{'min read'}</p> 
                            </div>
                          </div>
                          ))}
                          </div>
                
                      
                        </div>
                        <span>
                        <Link to={`/writer/${blog.author._id}`} className='mx-3 my-3 md:my-6 px-3 py-2 border-[1px] outline-none border-[rgb(36,36,36)] text-[#242424] text-sm rounded-[20px] inline hover:bg-gray-300'>See all from {blog.author.fname}{" "}{blog.author.lname}</Link></span>

                    </div>

        {/* --------------------------------------- Comment section start ------------------------------------ */}
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
          {/* --------------------------------------  comment output section---------------- */}
          {allPostedComment && allPostedComment.map((comment,idx)=>(
                          <div key={idx} className= ' flex flex-row justify-start items-start gap-x-1 my-4'>
                          <div className=''><img src={comment?.author?.profileImg?`${baseURL}/UserImages/${comment?.author?.profileImg}`: imag4} alt="userImg" className=' object-cover  rounded-[50%] h-[48px] w-[45px] border-2' /></div>
                          <div className='w-full border-[1px] rounded border-gray-300'>
                            <div className='text-sm flex flex-row justify-start items-center my-3 pl-2 border-b-[1px] border-gray-300'><span className='font-medium'>{comment.author?.fname}{" "}{comment.author?.lname}</span> <span><LuDot className="inline" size={20} /></span> 
                            <span>{moment(comment.createdAt).fromNow()}</span> 
                            {/* <span>{new Date(comment.createdAt).toLocaleString("en-US", options)}</span>  */}
                            {/* <span className='ml-2'>Edited on March 6 2023</span> */}
                            </div>
                            <div className='mx-3 my-1 text-sm'>
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

    {/* This component is use to down the whole page  */}
    <div className='hidden md:block'>
    <ScrollUpDown />
    </div>
    <Toaster/>
    </>
          
  )
}

export default SingleBlog