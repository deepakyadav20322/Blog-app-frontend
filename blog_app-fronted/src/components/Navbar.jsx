import React,{useContext, useEffect} from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Authcontext } from '../context/UserContext';
import userLogo from '../assets/userLogo.jpg';
import DropDownAllLinks from './DropDownAllLinks';

const Navbar = () => {

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
    <div className='custome-container mx-auto pl-2 pr-2'>
    <nav className="flex item-center justify-between pt-3 pb-2 border-b-[1px] ">
        <Link to={"/"}>
            <div className="flex items-center cursor-pointer">
                <img src={logo} height={35} width={40} />
                <span className="font-bold ml-2 text-primary">
                     Blog@Write
                </span>
            </div>
        </Link>
        <ul className="flex items-center">
            <li className="mr-6 font-medium text-gray-600 hover:text-primary transition-colors duration-200">
                <a href="#">Products</a>
            </li>
            <li className="mr-6 font-medium text-gray-600 hover:text-primary transition-colors duration-200">
                <a href="#">pricing</a>
            </li>
            
            <li className="mr-6 font-medium text-gray-600 hover:text-primary transition-colors duration-200">
                <Link to={`/company`}>Company</Link>    
            </li>
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
                    className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all">
                  Sign up
                </Link>
            </li>)}
         
        </ul>
    </nav>
    </div>
     <Outlet />
     </>
);
}

export default Navbar;