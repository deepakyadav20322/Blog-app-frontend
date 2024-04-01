import React,{useContext, useEffect, useState} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Authcontext } from '../context/UserContext';
import userLogo from '../assets/userLogo.jpg';
import DropDownAllLinks from './DropDownAllLinks';
import {HiBars3} from 'react-icons/hi2'
import {AiOutlineClose} from 'react-icons/ai'

// naviagtion link array---- 

const navLinkArr = [
    {name:'Products',
    linkName:"",
    },
    {name:'Company',
    linkName:"/company",
    },
    {name:'pricing',
    linkName:"",
    },
];

const Navbar = () => {
const [navOpen,setNavOpen] = useState(false);

    console.log('navbar')
    const  { isAuthenticated ,setIsAuthenticated,setLoginUser} = useContext(Authcontext);
    const token = localStorage.getItem('blogAuth');
    useEffect(()=>{
        const token = localStorage.getItem('blogAuth');
        const blogUser = localStorage.getItem('blogUser');
        if(token && blogUser){
          setIsAuthenticated(true);
        //   setLoginUser(token);
        }else{
            setIsAuthenticated(false);
        }
      
    })
   
  return (
    <>
    <div className='custome-container mx-auto pl-2 pr-2 relative'>
    <nav className="flex items-center justify-between pt-3 pb-2 border-b-[1px] z-20 ">
        <Link to={"/"}>
            <div className="flex items-center cursor-pointer">
                <img src={logo} height={35} width={40} className='ml-2' />
                <span className="logoname font-bold ml-2 text-primary">
                     Blog@Write
                </span>
            </div>
        </Link>
        <ul className="flex items-center overflow-x-auto">
            {navLinkArr.map((link)=>(
                 <li className="hidden md:block mr-6 font-medium text-gray-600 hover:text-primary transition-colors duration-200">
                 <a href={link.linkName}>{link.name}</a>
             </li>
            ))}


        </ul>
        
        <ul className="flex items-center">
            {
               ( token && isAuthenticated) ?(<Link to={'/new'} className='border-2 mr-3 hover:bg-[#6695FF] border-[#6695FF] hover:text-white px-2 py-2 rounded'>Create Post</Link>): (<li className="mr-6 font-medium text-gray-600">
                <Link to={'/login'} className="hover:text-gray-400 border-2 rounded border-primary px-3 py-2">
                    Login</Link></li>) }
            {
               ( token && isAuthenticated) ?(<DropDownAllLinks/>):   
            (<li className="font-medium text-gray-600"> 
                <Link
                    to={'/register'}
                    className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all hidden sm:block">
                  Sign up
                </Link>
            </li>)}

            {/* Three line bar for open mobile navigation  view .......... */}
           <li className='text-xl md:hidden mx-4'><HiBars3 onClick={()=>setNavOpen(true)} /></li>
        </ul>
    </nav>

    {/* navigation bar for mobile view------------------------- */}
    <div className={`${!navOpen?"hidden":""} bg-[#464545d1] w-full h-screen fixed z-30 top-0 left-0`}>

   
    <div className={`${!navOpen?"hidden":""} mobile_nav  w-[85%] max-w-xs bg-white  h-screen p-2`}>

        <div className='mobile_nav_top flex flex-row justify-between items-center m-2'>
        <span className="font-bold ml-2 text-primary ">
          Blog@Write
        </span>
          <AiOutlineClose size={30} onClick={()=>setNavOpen(false)} />
        </div>
         <div className='mobile_nav_bottom flex flex-col justify-center items-start p-2 text-[#007BFF]'>
   <ul className='flex justify-center items-center flex-col w-full font-medium '>
    {navLinkArr.map((links)=>(
    <li className=' border-black py-1 my-2 hover:bg-[#007BFF] hover:text-white w-full text-center'><Link to={`${links.linkName}`} onClick={()=>setNavOpen(false)}>{links.name}</Link></li>
    ))}
   
  
  
   </ul>
   <Link to={'/login'}  onClick={()=>setNavOpen(false)} className='bg-[#007BFF] text-white py-[6px] text-center w-full mt-4'>Login</Link>
   <Link to={'/register'}  onClick={()=>setNavOpen(false)}className='bg-[#007BFF] text-white py-[6px] text-center w-full mt-4'>Sign up </Link>
   
         </div>
    </div>
    </div>

    </div>
     <Outlet />
     </>
);
}

export default Navbar;