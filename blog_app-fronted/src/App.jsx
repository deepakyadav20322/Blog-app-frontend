
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import SingleBlog from './pages/SingleBlog';
import Login from './pages/Login';
import Register from './pages/Register';
import EmailVerifyShow from './pages/EmailVerifyShow';
import ResetUserPassword from './pages/ResetUserPassword';
import UpdatePost from './pages/UpdatePost';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Logout from './pages/Logout';
import UserDashboard from './pages/UserDashboard';

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
        <Route path='/resetPaaword/:uuid' element={<ResetUserPassword/>}/>
        <Route path='/emailVerification/:id' element={<EmailVerifyShow/>}/>
        <Route path='/singleBlog/:blogId' element={<SingleBlog/>}/>
        <Route  element={<PrivateRoute/>}>
         <Route path='/dashboard' element={<UserDashboard/>}/>
         <Route path='/new' element={<CreatePost/>}/>
         <Route path='/profile/upadte' element={<UserProfileUpdate/>}/>
         <Route path='/updatePost/:postId' element={<UpdatePost/>}/>

        <Route path='/logout' element={<Logout/>}/>
        </Route>
        <Route path='/*' element={<ErrorFour/>}/>
      </Routes>
   
    
   
    </div>
    </>
  )
}

export default App
