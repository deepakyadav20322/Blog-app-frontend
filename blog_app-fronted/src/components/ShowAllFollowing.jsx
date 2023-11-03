import React from 'react'
import { baseURL } from '../config'

const ShowAllFollowing = ({following}) => {


    return (
      <>
        <h1 className='text-xl font-bold pl-1 pb-2'>Following persons({following?.length})</h1>
       <div className=' flex flex-row justify-start items-center flex-wrap gap-4 border-t-2 border-gray-400 md:border-0 pt-2 md:pt-0'>
       {following?.length ==0 && <div className='text-center w-full text-xl font-bold border-2 flex flex-row justify-center items-center border-gray-300 bg-white  m-1 h-32'> You are not follow anyone. 😟 </div> }
      
        { 
          following?.map((folw,idx)=>(
              <div key={idx} className=' w-full sm:w-[225px] sm:h-[210px] p-6 custome-shadow flex flex-row sm:flex-col justify-start items-center bg-white gap-x-2 sm:gap-x-0'>
                   <img src={`${baseURL}/UserImages/${folw?.profileImg}`}  className='w-[80px] h-[80px] object-cover rounded-[50%]' alt="" />
                  <div className='my-2 text-center'>
                  <p className='py-1 text-blue-500 text-xl font-bold'>{folw.fname}{" "}{folw.lname}</p>
                <p>@{(folw.email).split('@')[0]}</p>
                  </div>
              </div>
       ))
      } 
      </div>
      </>
   
    )
  }

export default ShowAllFollowing