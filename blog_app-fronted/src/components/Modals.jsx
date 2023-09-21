// EmailModal.js
import React, { useState } from 'react';
import { baseURL } from '../config';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import {AiOutlineCloseSquare} from 'react-icons/ai'

function Modals({setIsOpenForget,isOpenForget,setIsOpenVerify,isOpenVerify}) {
  const [emailVerifyRes,setEmailVerifyRes] = useState("");
  const [loading ,setLoading] = useState(false);
  const [emailData,setEmailData] = useState({email:""});

  const handleOnchange = (e)=>{
     const{name,value} = e.target;  
     setEmailData((pre)=>({...pre , [name]:value}))
     }



  const handleClose =  ()=>{
    setIsOpenVerify(false);
    setIsOpenForget(false)
    setEmailData({email:""});
    setEmailVerifyRes("")
  }

  const  handleEmailVerify = async(e)=>{
    e.preventDefault();
    if(emailData.email==""){
      toast.success('Enter your email!')
      return;
    }
    try {
      setLoading(true);
        const res = await axios.post(`${baseURL}/user/verifyEmail`,emailData,{
          headers:{
            'Content-Type':'application/json'
          }
        });
        if(res.status==200){
          console.log(res.data);
          setEmailVerifyRes(res.data.data);
        }
        setEmailData({email:""});
        setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setEmailVerifyRes("Somethig went wrong !");
    }
  }

  const handleForgetPass = async(e)=>{
    e.preventDefault();
    if(emailData.email==""){
      toast.success('Enter your email!')
      return;
    }
    try {
      setLoading(true);
        const res = await axios.post(`${baseURL}/user/forgetPass`,emailData,{
          headers:{
            'Content-Type':'application/json'
          }
        });
        if(res.status==200){
          console.log(res.data);
          setEmailVerifyRes(res.data.data);
        }
        setEmailData({email:""});
        setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 500) {
        const errorMessage = error.response.data.data;
        setEmailVerifyRes(errorMessage);
       
      } else {
        setEmailVerifyRes("Something went wrong !");
    }
    setLoading(false);
  }
}

  return (
    <div>
     
      {isOpenVerify && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out">
          <div className="bg-white w-[90%] sm:w-[70%] md:w-[60%] lg:w-1/2 p-6 rounded-lg shadow-lg">
            <div onClick={()=>handleClose()} className='flex flex-row justify-end items-center'><AiOutlineCloseSquare size={35} color='red' className='inline cursor-pointer'/></div>
            <div className="text-xl font-semibold mb-4">Send Email for emial verify</div>

{/* ----------------------------  Alerrt Box start---------------------------------- */}
<div className={`${emailVerifyRes.type=='success'?'bg-green-100 border border-green-400 text-green-700':"bg-red-200  border border-red-400 text-red-700"} px-4 py-3 rounded relative ${emailVerifyRes==""?'hidden':'block'}`} role="alert">
              <strong className="font-bold">{emailVerifyRes.type=='success'?"Success":'Error'}!</strong>
              <span className="block sm:inline"> {emailVerifyRes.message}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg className={`${emailData.type=='success'?'text-green-500':'text-red-300'}"fill-current h-6 w-6 `} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </span>
              </div>
              {/* -----------------------------  Alerrt Box end---------------------------------- */}


            <form onSubmit={handleEmailVerify} >
      <div className="mb-4">
        <label htmlFor="toEmail" className="block text-gray-700 font-semibold ml-2 my-2">Email</label>
        <input type="email" id="toEmail" name="email" onChange={handleOnchange} value={emailData.email} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400" placeholder='Enter you emial' required />
      </div>
      
      <div className="text-center flex flex-row justify-center">
                    
              {loading?(<div class='flex items-center justify-center '>
    <button type="button" class="bg-[#53BD95] rounded-lg text-white font-bold hover:bg-[#53bd94ef] hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
        <div class="flex items-center justify-center m-[10px]"> 
            <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
            <div class="ml-2"> Processing... </div>
        </div>
    </button>
</div>):(<button type="submit"  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Send
              </button>)}

              <button type="button" className="ml-4 text-gray-600 border-[1px] border-gray-200 hover:text-gray-800 font-semibold py-2 px-4 rounded hover:bg-[#f55959]" onClick={()=>handleClose()}
              >Cancel</button>
      </div>
    </form>
          </div>
         
        </div>
      )}


      {/*==========================  // Create modal for forget pass mail------------------------------------- */}

      { isOpenForget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out">
          <div className="bg-white w-[90%] sm:w-[70%] md:w-[60%] lg:w-1/2 p-6 rounded-lg shadow-lg">
          <div onClick={()=>handleClose()} className='flex flex-row justify-end items-center'><AiOutlineCloseSquare size={35} color='red' className='inline cursor-pointer'/></div>
            <div className="text-xl font-semibold mb-4">Forget Password</div>
            
            {/* ----------------------------  Alerrt Box start---------------------------------- */}
             <div className={`alert-box ${emailVerifyRes.type=='success'?'bg-green-100 border border-green-400 text-green-700':"bg-red-200  border border-red-400 text-red-700"} px-4 py-3 rounded relative ${emailVerifyRes==""?'hidden':'block'}`} role="alert">
              <strong className="font-bold">{emailVerifyRes.type=='success'?"Success":'Error'}!</strong>
              <span className="block sm:inline"> {emailVerifyRes.message}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg  className={`${emailData.type=='success'?'text-green-500':'text-red-300'}"fill-current h-6 w-6 `} role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.293 5.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 11-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 11-1.414-1.414L8.586 10 4.293 5.707a1 1 0 111.414-1.414L10 8.586l4.293-4.293z" clipRule="evenodd" fillRule="evenodd"></path></svg>
              </span>
              </div>
              {/* -----------------------------  Alerrt Box end---------------------------------- */}

            <form onSubmit={handleForgetPass} >
            <div className="mb-4">
        <label htmlFor="toEmail" className="block text-gray-700 font-semibold ml-2 my-2">Email</label>
        <input type="email" id="toEmail" name="email" onChange={handleOnchange} value={emailData.email} className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-400" placeholder='Enter you emial' required />
      </div>
      
            <div className="text-center flex flex-row justify-center">  
                  {loading?(<div class='flex items-center justify-center '>
                  <button type="button" class="bg-[#53BD95] rounded-lg text-white font-bold hover:bg-[#53bd94ef] hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
                  <div class="flex items-center justify-center m-[10px]"> 
                  <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
                  <div class="ml-2"> Processing... </div>
                  </div>
                  </button>
                  </div>):(<button type="submit"  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Send
                    </button>)}
                    <button type="button" className="ml-4 text-gray-600 border-[1px] border-gray-200 hover:text-gray-800 font-semibold py-2 px-4 rounded hover:bg-[#f55959]" onClick={()=>(handleClose())}>Cancel</button>
            </div>
    </form>
          </div>
        </div>
      )}
<Toaster/>
    </div>
  );
}

export default Modals;
