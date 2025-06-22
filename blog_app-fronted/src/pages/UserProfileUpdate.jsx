import React,{useState,useEffect,useRef} from 'react'
import {BiSolidEdit, BiUpload} from 'react-icons/bi'
import {FiTrash2} from 'react-icons/fi'
import { Link,useNavigate } from 'react-router-dom'
import DeleteModal from '../components/DeleteModal'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { baseURL } from '../config'

const UserProfileUpdate = () => {
  
  const navigate = useNavigate();
  const initialValue = {
    fname:"",
    lname:"",
    email:"",
    password:"",
    Cpassword:"",
    mob:"",
    bio:"",
    websiteURL:"",
    location:"",
    available:"",
    currentLearning:"",
    skillLanguage:"",
    work:"",
    education:"",
    brandColor:"#000",
    profileImg:null

  }
  const [formData, setFormData] = useState(initialValue);

  // const baseURL = 'http://localhost:3001'
  const userId =  JSON.parse(localStorage.getItem('blogUser')).user._id ;
  const user =  JSON.parse(localStorage.getItem('blogUser')) ;
  const token = JSON.parse(localStorage.getItem('blogAuth')).token;
  const [deleteModalShow,setDeleteModalShow] = useState(false);
  const [profileImgs,setprofileImgs] = useState(null);
  const fileInputRef = useRef();


  const handleClick = (e) => {
    e.preventDefault()
      fileInputRef.current.click();
    }



  useEffect(()=>{
    const UpdateUserData = async () => {
      // console.log(userId);
     
      try {
        const response = await axios.get(`${baseURL}/user/getSingleUser/${userId}`,
         {headers: {
          Authorization: `Bearer ${token}`
         },});

        if (response.status===200) {
          //  console.log("before updating user data=> ",response.data);
           let userData = response.data.data;
           setFormData({
            fname: userData.fname,
            lname: userData.lname,
            email: userData.email,
            mob: userData.mob,
            bio: userData.bio,
            websiteURL:userData.websiteURL,
            location:userData.location,
            available:userData.available,
            currentLearning:userData.currentLearning,
            skillLanguage:userData.skillLanguage,
            work:userData.work,
            education:userData.education,
            brandColor:userData.brandColor,
            profileImg:userData.profileImg,
          });
        
        }
      } catch (error) {
        console.error("Error fetching user data:", error);

      }
    };

    UpdateUserData();

  },[])

  const handleOnSubmit = async(e)=>{

    e.preventDefault();
  // console.log('changes data',formData.profileImg)
    try {
      
      const response = await axios.post(`${baseURL}/user/updateUser/${userId}`, formData,{
        headers:{
          'Content-Type':'multipart/form-data',
          Authorization:`Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        console.log('User updated successfully');
        localStorage.setItem('blogUser',JSON.stringify({user:response.data.data}))
        localStorage.setItem('updateMessage','Profile Updated successfully');
        navigate('/dashboard')
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      let errMes = error.response.data.message
  
     toast.error(`${errMes}`);
      console.error('Error updating user:', error);
    }

  }

  return (
    <div className='bg-[#F5F5F5] pt-2'>
    <div className='max-w-[1080px] m-auto'>
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md w-full border-2">
  <h2 className="text-2xl font-semibold mb-4">Update Your Profile</h2>
  <form onSubmit={handleOnSubmit}>
  <div className='Image-container'>
  
    <div className='w-full bg-gray-200 rounded my-5  px-8 py-8 flex flex-row justify-between'>
      <div className='flex flex-col sm:flex-row  justify-start items-center gap-5'>
        <img src={profileImgs  && typeof profileImgs === 'object'?URL.createObjectURL(profileImgs):`${baseURL}/UserImages/${formData.profileImg}`} alt="" className='w-20 rounded-full object-cover' />
        <div className='text-center sm:text-start'>
        <p  className='text-[17px] font-small mb-1'>Change Profile Picture</p>
          <input type="file" name='profileImg'  className='hidden' ref={fileInputRef} onChange={(e) =>{ setFormData({ ...formData, profileImg: e.target.files[0] });setprofileImgs(e.target.files[0]) }} />
          <div className='flex items-center gap-x-4'>
            <button onClick={handleClick} className='px-3 py-2 rounded bg-[#161D29] text-white font-medium'>Select</button>
            {/* <button className='px-3 py-2 rounded bg-primary text-white font-medium'>Upload<span><BiUpload className='inline'/></span></button> */}
          </div>
        </div>
      </div>
      <div className='flex sm:justify-between items-end sm:items-start'>
      <div  className="text-white h-10 flex justify-center items-center cursor-not-allowed  rounded font-bold px-[12px] py-[8px] bg-[#302e2e]">Cancle</div>
      </div>
    </div>
  
   
   </div>
{/* //-------------------------- personal information start  */}
  
     <div className='w-full m-auto border-2 rounded  bg-gray-200 p-4'>
      <div className='flex flex-row justify-between items-center '>
        <h2 className='font-medium text-xl mb-4'>Personal Information</h2>
        <div className='flex flex-row gap-x-6'>
          {/* <button className='px-3 py-2 bg-[#161D29] rounded text-white font-medium taxt-medium'>Cancel</button> */}
          <button type='submit' className='px-4 py-2 bg-primary rounded text-white font-medium taxt-medium'>Save</button>
        </div>
      </div>
         <div className='Inputs-container flex flex-col sm:justify-between sm:items-center justify-center rounded items-start sm:flex-row'>
              <div className='inputs-left w-[90%]   sm:w-[45%]'>
              <label className="lable-width">
                            <p className="mb-1 mt-3">
                              Enter First Name <sup className="text-[#ff4545]">*</sup>
                            </p>
                            <input
                              required
                              type="text"
                              name="fname"
                              value={formData.fname}
                              onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                              autoComplete="off"
                              placeholder="Enter full name"
                              className="w-full px-3 py-2 border-[1px]  rounded-md text-gray-700 outline-none  focus:border-[#59e372] "
                            />
                          </label>
                          <label className="lable-width">
                            <p className="mb-1 mt-3"> Enter Email<sup className="text-[#ff4545]">*</sup> <span className='text-[#ff4545]'>&nbsp;(Disable)</span>
                             
                            </p>
                            <input
                              required
                              type="email"
                              name="email"
                              disabled
                              
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              autoComplete="off"
                              placeholder="Enter email"
                              className="w-full px-3 py-2 border-[1px]  rounded-md text-gray-700 outline-none  focus:border-[#59e372] cursor-not-allowed"
                            />
                          </label>
              </div>
              <div className='inputs-left w-[90%]  sm:w-[45%]'>
              <label className="lable-width">
                            <p className="mb-1 mt-3">
                            Enter Last Name  <sup className="text-[#ff4545]">*</sup>
                            </p>
                            <input
                              required
                              type="text"
                              name="lname"
                              value={formData.lname}
                              onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                              autoComplete="off"
                              placeholder="Enter Last Name"
                              className="w-full px-3 py-2 border-[1px]  rounded-md text-gray-700 outline-none  focus:border-[#59e372] "
                            />
                          </label>
                          <label className="lable-width">
                            <p className="mb-1 mt-3">
                            Mobile no. <sup className="text-[#ff4545]">*</sup>
                            </p>
                            <input
                              required
                              type="tel"
                              name="mob"
                              value={formData.mob}
                              onChange={(e) => setFormData({ ...formData, mob: e.target.value })}
                              autoComplete="off"
                              placeholder="Enter mobile number"
                              className="w-full px-3 py-2 border-[1px]  rounded-md text-gray-700 outline-none  focus:border-[#59e372] "
                            />
                          </label>
                         
                   </div>
                 </div>
                           <div className='my-4 w-[90%] sm:w-full'>
                         <label htmlFor="bio" className='py-5'>
                           Your Bio </label>
                            <textarea name="bio" placeholder='Tell you something about you'
                             id="bio" cols="30" rows="10" 
                             className='w-full resize-none rounded h-[150px] sm:h-[130px] md:h-[100px] focus:outline-none mt-2 focus:border-[#59e372] ' 
                             value={formData.bio}
                             onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                             maxLength={'250'} 
                             minLength={'0'} >
                             </textarea>
                          
                          </div>
  

     </div>
{/* --------------------------------- Basic Information Box -------------------------- */}

          <div className='flex flex-col justify-center items-start'>
          <div className='my-4 w-[90%]  sm:w-full border-2 px-4 pb-2 bg-gray-200 rounded relative'>
          <h1 className=' text-2xl font-bold flex my-2 '>Basic</h1>
             
          {/* <div className='h-28 w-28  border-2 border-black absolute top-4 right-20'>
            <img src={profileImgFile?URL.createObjectURL(profileImgFile):`https://www.freecodecamp.org/news/content/images/size/w2000/2021/08/imgTag.png`} className='h-28 w-28 object-cover' alt="" />
          </div>
                  <div className='w-full md:w-[390px] lg:w-[480px] '>
              <label className="py-5 ">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            Profile Image
                            </p>
                            <div className='border-[1px] border-black rounded-md text-black outline-none  focus:border-[#59e372] '>
                            <input
                              type='file'
                              name="profileImg"
                              onChange={(e) =>handleFileChange(e)}
                              autoComplete="off"
                              className="w-full px-3 py-1"
                            />
                            </div>
                          </label>
                          </div> */}
                        

              <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            Website URL
                            </p>
                            <input
                              type="text"
                              name="websiteURL"
                              value={formData.websiteURL}
                              onChange={(e) => setFormData({ ...formData, websiteURL: e.target.value })}
                              autoComplete="off"
                              placeholder="http://yoursite.com"
                              className="w-full px-3 py-2 border-[1px]  rounded-md text-gray-700 outline-none  focus:border-[#59e372] "
                            />
                          </label>
          
          
              <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            Location 
                            </p>
                            <input
                              type="text"
                              name="location"
                              value={formData.location}
                              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                              autoComplete="off"
                              placeholder="Bandra, Mumbai"
                              className="w-full px-3 py-2 border-[1px]  rounded-md text-gray-700 outline-none  focus:border-[#59e372] "
                            />
                          </label>
          </div>
          </div>
          {/* --------------------------------- ************** -------------------------- */}


     {/* -------------------- Coding Information section ----------------------------- */}
     <div className='flex flex-col justify-center items-start'>
          <div className='my-4 w-[90%]  sm:w-full border-2 px-4 pb-2 bg-gray-200 rounded'>
          <h1 className=' text-2xl font-bold flex my-2 '>Coding</h1>
              <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                           Currently Learning
                            </p>
                            <p className=' text-[13px] text-[rgb(67,66,66)]'>What are you learning right now?</p>
                            <textarea name="currentLearning" placeholder='...'
                             id="currentLearning" cols="30" rows="10" 
                             className='w-full resize-none rounded h-[100px] sm:h-[70px] focus:outline-none mt-2 focus:border-[#59e372] ' 
                             value={formData.currentLearning}
                             onChange={(e) => setFormData({ ...formData, currentLearning: e.target.value })}
                             maxLength={'100'} 
                             minLength={'0'} >
                             </textarea>
                          </label>
          
          
              <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            Available for 
                            </p>
                            <p className=' text-[13px] text-[rgb(67,66,66)]'>What kinds of collaborations or discussions are you available for?</p>
                            <textarea name="available" placeholder='...'
                             id="available" cols="30" rows="10" 
                             className='w-full resize-none rounded h-[100px] sm:h-[70px]  focus:outline-none mt-2 focus:border-[#59e372] ' 
                             value={formData.available}
                             onChange={(e) => setFormData({ ...formData, available: e.target.value })}
                             maxLength={'100'} 
                             minLength={'0'} >
                             </textarea>
                          </label>

                          <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            skills/Language 
                            </p>
                            <p className=' text-[13px] text-[rgb(67,66,66)]'>What tools and languages are you most experienced with? </p>
                            <textarea name="skillLanguage" placeholder='...'
                             id="skillLanguage" cols="30" rows="10" 
                             className='w-full resize-none rounded h-[100px] sm:h-[70px]  focus:outline-none mt-2 focus:border-[#59e372] ' 
                             value={formData.skillLanguage}
                             onChange={(e) => setFormData({ ...formData, skillLanguage: e.target.value })}
                             maxLength={'100'} 
                             minLength={'0'} >
                             </textarea>
                          </label>

          </div>
          </div>



     {/* -------------------------**************************----------------------------- */}

     {/* ----------------------------- Work Box ------------------------------- */}

     <div className='flex flex-col justify-center items-start'>
          <div className='my-4 w-[90%]  sm:w-full border-2 px-4 pb-2 bg-gray-200 rounded'>
          <h1 className=' text-2xl font-bold flex my-2 '>Work</h1>
          <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            Work 
                            </p>
                            <textarea name="work" placeholder='What do you do? Example CEO at V.Tech'
                             id="work" cols="30" rows="10" 
                             className='w-full resize-none rounded h-[80px] sm:h-[50px] focus:outline-none mt-2 focus:border-[#59e372] ' 
                             value={formData.work}
                             onChange={(e) => setFormData({ ...formData, work: e.target.value })}
                             maxLength={'100'} 
                             minLength={'0'} >
                             </textarea>
                          </label>
          <label className="py-5">
                            <p className="mb-1 mt-3 text-[rgb(23,23,23)] font-medium">
                            Education 
                            </p>
                            <textarea name="education" placeholder='Where did you go to school'
                             id="education" cols="30" rows="10" 
                             className='w-full resize-none rounded h-[80px] sm:h-[50px] focus:outline-none mt-2 focus:border-[#59e372] ' 
                             value={formData.education}
                             onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                             maxLength={'100'} 
                             minLength={'0'} >
                             </textarea>
                          </label>
          </div>
          </div>

     {/* ----------------------------- ***************------------------------------- */}

     {/* ----------------------------------- Branding section ------------------------------ */}
  
     <div className='flex flex-col justify-center items-start'>
          <div className='my-4 w-[90%]  sm:w-full border-2 px-4 pb-2 bg-gray-200 rounded'>
          <h1 className=' text-2xl font-bold flex my-2 '>Brand</h1>
           <p className=' text-[13px] text-[rgb(67,66,66)]'>Used for backgrounds, borders etc. </p>
           <div className='border-2 border-gray-500 flex flex-row justify-start items-center bg-gray-50 '>
           <input type="color" name="brandColor" id="brandColor" className='w-[40px] h-[40px] cursor-pointer ' value={formData.brandColor}  onChange={(e) => setFormData({ ...formData, brandColor: e.target.value })} />
             <p className='ml-2'>{formData?.brandColor}</p>
           </div>
          </div>
          </div>

     {/* ----------------------------------- **************** ------------------------------ */}
  </form>

         <div className='text-[#AB2163] mt-6'>If you wants to delete your account?</div>
  <div className="deleteUserBox w-full font-sm p-4 bg-[#9e004cde] border-[1px] border-[#451414] rounded mt-2" >
  <div className="flex items-center">
    <div className="bg-red-600 text-white rounded-full p-2">
      <FiTrash2 size={20} />
    </div>
    <span className="ps-3 font-bold text-lg text-white">Delete Account?</span>
  </div>
  <div className="ps-5">
    <p className="text-pink-300">Would you like to delete your account?</p>
    <p className="text-pink-300">If you delete your account, it cannot be recovered.</p>
    {(user?.user?.email==='testuserblogwrite@gmail.com')?<>
     <button disabled className="bg-red-600 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded disabled:cursor-not-allowed">
     Not have access to delete test user
    </button>
    </>
:
    <button onClick={()=>setDeleteModalShow(true)} className="bg-red-600 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded">
      Delete
    </button>}
  </div>
</div>
</div>



    </div>
    
      {deleteModalShow?<DeleteModal setDeleteModalShow={setDeleteModalShow}/>:""}
      <Toaster/>
    </div>
  )

  }

export default UserProfileUpdate