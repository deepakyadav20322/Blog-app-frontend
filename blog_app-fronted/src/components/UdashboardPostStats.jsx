import React from 'react'

const UdashboardPostStats = ({userSpecificPosts}) => {
  return (

    <div className='border-2'>
    <div className='flex flex-col justify-center mx-3'>
      <h2 className='font-bold text-xl'>Analytics</h2>
      <div className='Analytics-container py-5'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* First Stat */}
  <div className="bg-gray-200 p-4 rounded-md w-full  md:w-full h-24 transition-transform transform hover:scale-105">
    {/* Your content for the first stat */}
    <p className='text-xl'>Total Views</p>
  <span className='text-xl pl-3'>{userSpecificPosts.reduce((total, post) => total + post.viewCount, 0)}</span>
  </div>

  {/* Second Stat */}
  <div className="bg-gray-200 p-4 rounded-md w-full  md:w-full h-24 transition-transform transform hover:scale-105">
    {/* Your content for the second stat */}
    <p className='text-xl'>Total Saves</p>
  <span className='text-xl pl-3'>{userSpecificPosts.reduce((total, post) => total + post.saveCount, 0)}</span>
  </div>
 

  {/* Third Stat */}
  <div className="bg-gray-200 p-4 rounded-md w-full  md:w-full h-24 transition-transform transform hover:scale-105">
    {/* Your content for the third stat */}
    <p className='text-xl'>Total Comments</p>
  <span className='text-xl pl-3'>{userSpecificPosts.reduce((total, post) => total + post.comments.length, 0)}</span>
  </div>
</div>


      </div>
      </div>
    

    </div>
  )
}

export default UdashboardPostStats