
import { useState,useContext,useEffect } from 'react'
import { Switch } from '@headlessui/react'
import {toast,Toaster} from 'react-hot-toast'
import {baseURL} from '../config.js'
import axios from 'axios'
import { Authcontext } from '../context/UserContext.jsx'
import { Navigate,useNavigate } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Register() {
  const {isAuthenticated,setIsAuthenticated} = useContext(Authcontext);
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate()
  
  const initialValue = {
    fname:"",
    lname:"",
    email:"",
    password:"",
    Cpassword:"",
    mob:"",
    bio:""
  }

  const [registerData,setResisterData] = useState(initialValue);
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setResisterData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
  };

  const onHandleSubmit = async(e)=>{
    e.preventDefault();
    if(!registerData.email || !registerData.fname || !registerData.lname || !registerData.password || !registerData.Cpassword || !registerData.mob){
      toast.success("All fields are required");
      return;
    }
    if(registerData.password!==registerData.Cpassword){
      toast.success("Both password field not match");
      return;
    }
    if (!(/^[A-Za-z]+$/.test(registerData.fname)) || !(/^[A-Za-z]+$/.test(registerData.lname))) {
             toast.success('Only character allowed in name field');
             return;
    }

    try {
      const res = await axios.post(`${baseURL}/user/register`,registerData,{
      headers: {
        'Content-Type': 'application/json',
      }
    });
      if(res.status===200){
        console.log(res.data);
         setResisterData(initialValue);
      localStorage.setItem('emailVerifyMessage',"Email verification link send on your email, Please verify first.");
         navigate('/login');
      }
      
    } catch (error) {
      if (error.response && error.response.status === 500) {
      
        const errorMessage = (error.response.data.message);
        toast.error(errorMessage);
      } else {
        toast.error('Something went wrong!');
    }
      console.log(error);
      
    }

    console.log(registerData);
  }
       
  const getToken = localStorage.getItem("blogAuth");

useEffect(()=>{
  if(getToken){
   navigate('/dashboard')
  }
})

  return (
    <div className="isolate bg-white px-6 py-6 sm:py-8 lg:px-8">
     
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl  text-[#53bd95]">Signup</h2>
       
      </div>
      <form onSubmit={onHandleSubmit}  className="mx-auto mt-6 max-w-xl sm:mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name <span className='text-[#ff4949] text-[8px] align-text-bottom'>&#9733;</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="fname"
                id="first-name"
                onChange={handleOnChange}
                value={registerData.fname}
                autoComplete="given-name"
                placeholder='Jhon'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name<span className='text-[#ff4949] text-[8px] align-text-bottom'>&#9733;</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lname"
                id="last-name"
                onChange={handleOnChange}
                value={registerData.lname}
                autoComplete="family-name"
                placeholder='Doe'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email<span className='text-[#ff4949] text-[8px] align-text-bottom'>&#9733;</span>
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleOnChange}
                value={registerData.email}
                autoComplete="email"
                placeholder='jhon01@gmail.com'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
               Password <span className='text-[#ff4949] text-[8px] align-text-bottom'>&#9733;</span>
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                value={registerData.password}
                onChange={handleOnChange}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="Cpassword" className="block text-sm font-semibold leading-6 text-gray-900">
            Confirm Password <span className='text-[#ff4949] text-[8px] align-text-bottom'>&#9733;</span>
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="Cpassword"
                id="Cpassword"
                onChange={handleOnChange}
                value={registerData.Cpassword}
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          

          <div className="sm:col-span-2">
            <label htmlFor="Bio" className="block text-sm font-semibold leading-6 text-gray-900">
              Bio
            </label>
            <div className="mt-2.5">
              <textarea
                type="text"
                name="bio"
                id="Bio"
                onChange={handleOnChange}
                value={registerData.occupation}
                placeholder='Tell me something about you...'
                
                className="block w-full min-h-[100px] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number <span className='text-[#ff4949] text-[8px] align-text-bottom'>&#9733;</span>
            </label>
            <div className=" mt-2.5">
              
              <input
                type="tel"
                name="mob"
                id="phone-number"
                onChange={handleOnChange}
                value={registerData.mob}
                autoComplete="tel"
                placeholder='Mobile no.'
                maxLength={10}
                className="block w-full rounded-md border-0 px-1py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#53bd95] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#4ab18a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#53bd95]"
          >
            Signup
          </button>
        </div>
      </form>
      <Toaster/>
    </div>
  )
}

export default Register;
