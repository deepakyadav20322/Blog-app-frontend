import React from 'react'

const UdashboardPostStats = () => {
  return (

    <div className='border-2'>
    <div className='flex flex-col justify-center mx-3'>
      <h2 className='font-bold text-xl'>Analytics</h2>
      <div className='Analytics-container py-5'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* First Stat */}
  <div className="bg-gray-200 p-4 rounded-md w-full  md:w-full h-24 transition-transform transform hover:scale-105">
    {/* Your content for the first stat */}
    Stat 1
  </div>

  {/* Second Stat */}
  <div className="bg-gray-200 p-4 rounded-md w-full  md:w-full h-24 transition-transform transform hover:scale-105">
    {/* Your content for the second stat */}
    Stat 2
  </div>

  {/* Third Stat */}
  <div className="bg-gray-200 p-4 rounded-md w-full  md:w-full h-24 transition-transform transform hover:scale-105">
    {/* Your content for the third stat */}
    Stat 3
  </div>
</div>


      </div>
      </div>
    

    </div>
  )
}

export default UdashboardPostStats