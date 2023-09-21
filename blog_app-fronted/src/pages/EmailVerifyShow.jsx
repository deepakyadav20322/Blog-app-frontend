import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../config';

const EmailVerifyShow = () => {
const {id} = useParams();
const [successVerify,setSuccessVerify] = useState(false);

const handleVerify = async()=>{
    try {
        const res = await axios.post(`${baseURL}/user/verification/${id}`,{},{
            headers:{
            'Content-Type':'application/json'
            }
         });
    
         if(res.status===200){
           console.log(res.data);
           setSuccessVerify(true);
         }
    } catch (error) {
        console.log(error);

    }
    
}
useEffect(()=>{
    handleVerify();
},[id]);


  return (
    <div className='text-4xl flex justify-center items-center min-h-[50vh]'>
       {successVerify?' your Email is verified, verification successful':' your Email is not verified'}
    </div>
  )
}

export default EmailVerifyShow