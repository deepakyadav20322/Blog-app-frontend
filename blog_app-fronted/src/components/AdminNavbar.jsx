import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
    <div className='w-full px-3 flex flex-row justify-center items-center h-[50px] border-2'>
     {/* <div>Logo</div> */}
     <div className='text-[18px] font-bold'>Welcome Admin</div>
     {/* <div>Search</div> */}
    </div>
    <Outlet/>
    </>
  )
}

export default AdminNavbar