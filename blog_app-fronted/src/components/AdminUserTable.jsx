import React, { useState } from 'react';
import img3 from '../assets/pexels-pixabay-220453.jpg'
import { baseURL } from '../config';
import axios from 'axios';

const AdminUserTable = ({allUserData,loading,blocking,setBlocking}) => {


  const adminToken = localStorage.getItem("adminBlogAuth");

  // --------------------------------- To block the user ---------------
const handleBlockUser = async (e,userId,status) => {

  let confirmBlock ;
  // Display a confirmation dialog
  if(status){
   confirmBlock = window.confirm('Are you sure you want to Unblock this user?');
  }else{
    confirmBlock = window.confirm('Are you sure you want to block this user?');
  }
  
  if (confirmBlock) {
    try {
   
      // Make an API request to block the user by ID
      const response = await axios.put(`${baseURL}/admin/userBlock/${userId}`,{},{
        headers:{
          Authorization:`Bearer ${adminToken}`,
        }
      });
      if (response.status === 200) {
        console.log('User blocked successfully');
        setBlocking(!blocking);
        // Handle success, e.g., update UI or show a success message
      } else {
        console.error('Failed to block user');
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error('Error blocking user:', error);
      // Handle error, e.g., show an error message to the user
      setBlocking(!blocking);
  }
};
}



  return (
    <div className="bg-white shadow-md rounded-lg overflow-x-scroll">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-green-300">
          <tr className=''>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile No.</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blocked User</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delete</th>
            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
           
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
        {loading && <tr>
           <td colSpan="9">
        <div className= 'Spinner text-center font-bold text-xl py-2'>
        <div role="status">
    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

        </div>
          </td>
          </tr>}
       {!loading && allUserData.length === 0 ?(
          <tr>
           <td colSpan="9">
        <div className='text-center font-bold text-xl py-2'> No any user available</div>
          </td>
           </tr> ):
           (!loading && allUserData.map((user,index) => (
            <tr
            key={user._id}
            className={index % 2 === 0 ? 'bg-white hover:bg-gray-100' : 'bg-gray-50 hover:bg-gray-100'}
          >
              <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={img3} className='w-[30px] h-[30px] object-cover rounded-full' alt="" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.fname}{" "}{user.lname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.mob}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.emailVerify}</td>
              <td className="px-6 py-4 whitespace-nowrap" > <button className={`px-3 py-1 rounded ${user?.blocked?'bg-red-400':'bg-green-400 '} text-white`} onClick={(e)=>handleBlockUser(e,user._id,user.blocked)}>{user?.blocked==1?'Blocked':'Running'}</button></td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-800">Update</button>
              </td>
              
            </tr>
          )))}
              
              
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserTable;
