import React from 'react'

const ShowAllFollowers = () => {

  const followersData = JSON.parse(localStorage.getItem('blogUser'))?.user.followers;
  console.log(followersData)
 

  return (
    <>
      <h1 className='text-xl font-bold pl-1 pb-2'>Followers </h1>
     <div className=' flex flex-row justify-start items-center flex-wrap gap-4 border-t-2 border-gray-400 md:border-0 pt-2 md:pt-0'>
        
     {followersData?.length == 0 && <div className='text-center w-full text-xl font-bold border-2 flex flex-row justify-center items-center border-gray-300 bg-white  m-1 h-32'> No any Followers 😟 </div> }
    
      { 
        followersData?.map((folw,idx)=>(
            <div key={idx} className=' w-full sm:w-[225px] sm:h-[210px] p-6 custome-shadow flex flex-row sm:flex-col justify-start items-center bg-white gap-x-2 sm:gap-x-0'>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nfVRS1jb--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1168323/18f4f7a0-9add-4bd9-8fed-5fd4ed7b3276.jpg"  className='w-[80px] h-[80px] object-cover rounded-[50%]' alt="" />
                <div className='my-2 text-center'>
                <p className='py-1 text-blue-500 text-xl font-bold'>Deepak yadav</p>
                <p>@kshfdsksdfhkjdhjdg</p>
                </div>
            </div>
     ))
    } 
    </div>
    </>
 
  )
}

export default ShowAllFollowers