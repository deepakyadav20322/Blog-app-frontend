import React,{useState,useEffect} from 'react'
import {BiSolidEdit, BiUpload} from 'react-icons/bi'
import {FiTrash2} from 'react-icons/fi'
import { Link,useNavigate } from 'react-router-dom'
import DeleteModal from '../components/deleteModal'
import axios from 'axios'

const UserProfileUpdate = () => {
  
  const navigate = useNavigate();
  const initialValue = {
    fname:"",
    lname:"",
    email:"",
    password:"",
    Cpassword:"",
    mob:"",
    bio:""
  }
  const [formData, setFormData] = useState(initialValue);

  const baseURL = 'http://localhost:3001'
  const userId =  JSON.parse(localStorage.getItem('blogUser')).user._id ;
  const token = JSON.parse(localStorage.getItem('blogAuth')).token;
  const [deleteModalShow,setDeleteModalShow] = useState(false);


  useEffect(()=>{
    const UpdateUserData = async () => {
      console.log(userId)
      try {
        const response = await axios.get(`${baseURL}/user/getSingleUser/${userId}`,
         {headers: {
          Authorization: `Bearer ${token}`
         },});

        if (response.status===200) {
           console.log("before updating user data=> ",response.data);
           let userData = response.data.data;
           setFormData({
            fname: userData.fname,
            lname: userData.lname,
            email: userData.email,
            mob: userData.mob,
            bio: userData.bio,
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
  console.log('changes data',formData)
    try {
      
      const response = await axios.post(`${baseURL}/user/updateUser/${userId}`, formData,{
        headers:{
          'ContentType':'application/json',
          Authorization:`Bearer ${token}`
        }
      });
      
      if (response.status === 200) {
        console.log('User updated successfully');
        localStorage.setItem('blogUser',JSON.stringify({user:response.data.data}))
        navigate('/')
      } else {
        console.error('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }

  }

  return (
    <div className='bg-[#F5F5F5] pt-2'>
    <div className='max-w-[1080px] m-auto'>
      <div className="mx-auto p-6 bg-white rounded-lg shadow-md w-full border-2">
  <h2 className="text-2xl font-semibold mb-4">Update Your Profile</h2>
  <div className='Image-container'>
   <form action="">
    <div className='w-full bg-gray-200 rounded my-5  px-8 py-8 flex flex-row justify-between'>
      <div className='flex flex-col sm:flex-row  justify-start items-center gap-5'>
        <img src="https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg" alt="" className='w-20 rounded-full object-cover' />
        <div className='text-center sm:text-start'>
        <p  className='text-[17px] font-small mb-1'>Change Profile Picture</p>
          <input type="file"  className='hidden' />
          <div className='flex items-center gap-x-4'>
            <button className='px-3 py-2 rounded bg-[#161D29] text-white font-medium'>Select</button>
            <button className='px-3 py-2 rounded bg-primary text-white font-medium'>Upload<span><BiUpload className='inline'/></span></button>
          </div>
        </div>
      </div>
      <div className='flex sm:justify-between items-end sm:items-start'>
      <Link to={'/profile'} className="text-white h-10 flex justify-center items-center  rounded font-bold px-[12px] py-[8px] bg-[#000]">Cancle</Link>
      </div>
    </div>
   </form>
   
   </div>
{/* //-------------------------- personal information start  */}
  <form onSubmit={handleOnSubmit}>
     <div className='w-full m-auto border-2 rounded  bg-gray-200 p-4'>
      <div className='flex flex-row justify-between items-center '>
        <h2 className='font-medium text-xl mb-4'>Personal Information</h2>
        <div className='flex flex-row gap-x-6'>
          <button className='px-3 py-2 bg-[#161D29] rounded text-white font-medium taxt-medium'>Cancel</button>
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
    <button onClick={()=>setDeleteModalShow(true)} className="bg-red-600 hover:bg-red-700 text-white font-bold mt-4 py-2 px-4 rounded">
      Delete
    </button>
  </div>
</div>
</div>



    </div>
    
      {deleteModalShow?<DeleteModal setDeleteModalShow={setDeleteModalShow}/>:""}
    </div>
  )

  }

export default UserProfileUpdate