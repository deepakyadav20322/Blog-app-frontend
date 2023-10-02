
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
import MySaveListLibrary from './pages/MySaveListLibrary';
import AdminDashboard from './pages/AdminDashboard';
import AdminNavbar from './components/AdminNavbar';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminLogout from './components/AdminLogout';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import WriterProfilePage from './pages/WriterProfilePage';




function App() {
 
  return (<>
    <div className='container-fluid mx-auto font-sans'>

    
    
         
   
      <Routes>
      <Route path='/' element={<Navbar/>}>
    <Route index element={<Home />} />
        <Route path='/register' element={ <Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/resetPaaword/:uuid' element={<ResetUserPassword/>}/>
        <Route path='/emailVerification/:id' element={<EmailVerifyShow/>}/>
        <Route path='/singleBlog/:blogId' element={<SingleBlog/>}/>
        <Route path='/writer/:userId' element={<WriterProfilePage/>}/>
        <Route  element={<PrivateRoute/>}>
         <Route path='/dashboard' element={<UserDashboard/>}/>
         <Route path='/new' element={<CreatePost/>}/>
         <Route path='/profile/upadte' element={<UserProfileUpdate/>}/>
         <Route path='/updatePost/:postId' element={<UpdatePost/>}/>
         <Route path='/MySaveList' element={<MySaveListLibrary/>}/>

        <Route path='/logout' element={<Logout/>}/>
        </Route>
      </Route>


   {/*---------------- Admin Routes-------------------- */}


          <Route path='/admin' element={<AdminNavbar />}>
          <Route path='/admin/login' element={<AdminLoginPage />} />
          <Route element={<AdminPrivateRoute/>}>
          <Route index element={<AdminDashboard />} /> 
          <Route path='/admin/logout' element={<AdminLogout />} />
          </Route> 
          </Route>

          {/* 404 Route */}
          
          <Route path='/Error' element={<ErrorFour />} />
          <Route path='/*' element={<ErrorFour />} />

          </Routes>

      </div>
   
    
    </>
  )
}

export default App
