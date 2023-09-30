import React,{useContext,useEffect} from 'react'
import { Authcontext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
    const navigate =  useNavigate();
    const {adminAuthenticated,setadminAuthenticated} =useContext(Authcontext);
    useEffect(() => {
        // Check if the items exist in localStorage before removing them---
        const tokenExists = localStorage.getItem("adminBlogAuth");
        const adminBlogUser = localStorage.getItem("adminBlogUser");
        console.log('useEffect2222222')
    
        if (tokenExists   || (adminAuthenticated===true)) {
          localStorage.removeItem("adminBlogUser");
          
          console.log("first")
        
          navigate("/admin/login", { replace: true });
        } 
        if(adminBlogUser ||(adminAuthenticated===true)){
            localStorage.removeItem("adminBlogAuth");
          console.log('second')
          
        }
        setadminAuthenticated(false)
      }, []);
    
  return (
    <div>


    </div>
  )
}

export default AdminLogout;