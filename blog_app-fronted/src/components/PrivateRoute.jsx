import React,{useContext,useEffect} from 'react'
import { Authcontext } from '../context/UserContext'
import { useNavigate,Outlet, Navigate,useLocation } from 'react-router-dom';
const PrivateRoute = () => {
  const { isAuthenticated ,setLoginUser} = useContext(Authcontext);
  const navigate = useNavigate();
  const token = localStorage.getItem('blogAuth')
  const user = localStorage.getItem('blogUser')
  const location = useLocation();
 
      console.log('Private')
  return (
    <div>
      
         {  token && user || (isAuthenticated)  ? <Outlet /> : <Navigate to={'/login'} state={{from : location}} replace />}
      
    </div>
  );
}

export default PrivateRoute