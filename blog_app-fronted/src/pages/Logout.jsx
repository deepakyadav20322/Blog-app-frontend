import React,{useContext,useEffect} from 'react'
import { Authcontext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate =  useNavigate();
    const {isAuthenticated,setIsAuthenticated} =useContext(Authcontext);
    useEffect(() => {
        // Check if the items exist in localStorage before removing them---
        const tokenExists = localStorage.getItem("blogAuth");
        const blogUser = localStorage.getItem("blogUser");
        console.log('useEffect2222222')
    
        if (tokenExists   || (isAuthenticated===true)) {
          localStorage.removeItem("blogUser");
          // localStorage.removeItem("blogAuth");
          // console.log(blogUser)
          console.log("first")
        
          navigate("/login", { replace: true });
        } 
        if(blogUser ||(isAuthenticated===true)){
          localStorage.removeItem("blogAuth");
          console.log('second')
          
        }
        setIsAuthenticated(false)
      }, []);
    
  return (
    <div>


    </div>
  )
}

export default Logout