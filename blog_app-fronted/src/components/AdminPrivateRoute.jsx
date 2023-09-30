import React,{useContext} from 'react'
import { Authcontext } from '../context/UserContext'
import { Outlet, Navigate,useLocation } from 'react-router-dom';
const AdminPrivateRoute = () => {
    const {adminAuthenticated} =useContext(Authcontext);

  const token = localStorage.getItem("adminBlogAuth");
  const user = localStorage.getItem("adminBlogUser");
  const location = useLocation();
 
      console.log('Private admin')
  return (
    <div>
      
         {  token && user || (adminAuthenticated)  ? <Outlet /> : <Navigate to={'/admin/login'} state={{from : location}} replace />}
      
    </div>
  );
}

export default AdminPrivateRoute