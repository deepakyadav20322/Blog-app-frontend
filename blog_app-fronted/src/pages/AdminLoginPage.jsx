import axios from 'axios';
import React,{useState} from 'react'
import { BsEye } from 'react-icons/bs';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { baseURL } from '../config';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    const navigate = useNavigate()
      const [showPassword, setShowPassword] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
        try {
        const res = await axios.post(`${baseURL}/admin/adminLogin`,formData,{
            headers:{
                'Content-Type':'application/json',
            }
        })

        if(res.status==200){
            console.log('Admmin login successfully',res.data);
            localStorage.setItem('adminBlogAuth',res.data.token);
            localStorage.setItem('adminBlogUser',JSON.stringify(res.data.data));
            navigate('/admin');
        }
    } catch (error) {
        console.log('Admmin not login',error);  
        
    }
      };


  return (
    <div>
        <div className=' bg-gray-50 login-height '>
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div className='mb-5'>
              <label htmlFor="email-address" className="mb-2">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-[0.7rem] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="pb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-[0.7rem] border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={handleChange}
              />
              <div
                className="absolute top-8 mr-1 right-0 p-[6px] flex items-center cursor-pointer z-10 hover:bg-gray-200 rounded-[50%] active:scale-90 transition-color duration-100  "
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                    <FiEyeOff size={20} />
                    ) : (
                    <FiEye size={20}/>
                
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  

        </div>
    </div>
  )
}

export default AdminLoginPage