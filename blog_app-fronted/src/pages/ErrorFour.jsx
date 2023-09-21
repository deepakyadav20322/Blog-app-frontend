import React from 'react'
import { Link } from 'react-router-dom'

const ErrorFour = () => {
  return (
<>
            <div className='flex flex-col items-center justify-center w-full m-auto md:mb-6 px-5 md:px-1 md:w-[680px] min-h-[80vh]'>
           <div className='pl-1'>PAGE NOT FOUND </div>
           <div className='text-[#757575] leading-[88px] text-[85px]'>404</div>
           <h1 className='leading-[36px] text-[28px] md:text-[32px]'>Out of nothing, something.</h1>
           <div className='text-center'>
            <p>You can find (just about) anything on Medium — apparently even a page that doesn’t exist. Maybe these stories about finding what you didn’t know you were looking for will take you somewhere new?</p>
           </div>
           <Link to={'/'} className='text-center px-4 py-2 border-[1px] border-green-600 bg-[#3af93d] rounded my-4'>Go To Home</Link>
           </div>
</>
  )
}

export default ErrorFour