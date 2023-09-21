import { useState ,useContext} from 'react'
import { Link,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoryTabs from './components/CategoryTabs';
import BlogList from './components/BlogList';
import SingleBlog from './pages/SingleBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailVerifyShow from './pages/EmailVerifyShow';
import ResetUserPassword from './pages/ResetUserPassword';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Logout from './pages/Logout';
import UserDashboard from './pages/UserDashboard';
import { Authcontext } from './context/UserContext'
import ErrorFour from './pages/ErrorFour';
import CreatePost from './pages/CreatePost';
import UserProfileUpdate from './pages/UserProfileUpdate';


function App() {
 
  return (<>
    <div className='container-fluid mx-auto font-sans'>

      <div className='container mx-auto pl-2 pr-2'>
         <Navbar/> 
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={ <Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profileUpdate' element={<UserProfileUpdate/>}/>
        <Route path='/resetPaaword/:uuid' element={<ResetUserPassword/>}/>
        <Route path='/emailVerification/:id' element={<EmailVerifyShow/>}/>
        <Route  element={<PrivateRoute/>}>
         <Route path='/dashboard' element={<UserDashboard/>}/>
         <Route path='/new' element={<CreatePost/>}/>

        <Route path='/logout' element={<Logout/>}/>
        </Route>
        <Route path='/*' element={<ErrorFour/>}/>
      </Routes>
   
    
   
    </div>
    </>
  )
}

export default App
