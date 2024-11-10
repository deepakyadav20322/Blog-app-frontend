import React,{useState,useContext,useEffect} from 'react'
import CustomeModals from '../components/Modals';
import {toast,Toaster} from 'react-hot-toast';
import axios from 'axios';
import { baseURL } from '../config';
import {Authcontext} from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseSquare, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaWindowClose } from 'react-icons/fa';



const Login = () => {


  const [isOpenForget, setIsOpenForget] = useState(false);
  const [isOpenVerify, setIsOpenVerify] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const{setIsAuthenticated,setLoginUser} =  useContext(Authcontext);
  const navigate = useNavigate()
  const initialValue = {
    email:"",
    password:"",
  }
const [loginData,setLoginData] = useState(initialValue);
const handleOnChange = (event) => {
  const { name, value } = event.target;
  setLoginData((prevLoginData) => ({
    ...prevLoginData,
    [name]: value,
  }));
};

  const onHandleSubmit = async(e)=>{
    e.preventDefault();
    if(!loginData.email || !loginData.password){
      toast.success("All fields are required");
      return;
    }
    try {
      const res  = await axios.post(`${baseURL}/user/login`,loginData,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if(res.status===200){
        console.log(res.data);
        localStorage.setItem('blogAuth',JSON.stringify(res.data.token));
        localStorage.setItem('blogUser',JSON.stringify(res.data.data));
       setIsAuthenticated(true);
       setLoginUser(res.data.data);
       localStorage.setItem('loginMessage',"Login successfully");
      
       navigate('/dashboard');
      }
      setLoginData({ email:"",password:"",})
    } catch (error) {
      if (error.response && error.response.status === 500) {
       
        const errorMessage = (error.response.data.message);
        toast.error(errorMessage);
      } else {
        toast.error('Sothing went wrong!');
    }
      console.log('error',error.message);
      setLoginData({ email:"",password:"",})
    }
  }



 useEffect(() => {
  const emailVerifyMess = localStorage.getItem('emailVerifyMessage');
  
  if (emailVerifyMess !== null) {
    // toast(emailVerifyMess,{ 
    //   duration:7000,
    //   style:{
    //       backgroundColor:'black',
    //       color:'white',
    //       maxWidth:'500px',
    //       width:'100%',
    //       padding:'6px',
    //       textAlign:'left'
    //   }})
    toast((t) => (
      <span className='bg-black text-white flex flex-row w-full justify-between'>
        {emailVerifyMess}
        <FaWindowClose size={25} onClick={() => toast.dismiss(t.id)} className='bg-red-500 text-white cursor-pointer rounded-[50%]' />
        
      </span>
    ),{duration:20000, style:{
            backgroundColor:'black',
            color:'white',
            maxWidth:'500px',
            width:'100%',
            padding:'6px',
            
        }});
   localStorage.removeItem('emailVerifyMessage');
   
  }
 
}, []);




useEffect(()=>{
  const getToken = localStorage.getItem("blogAuth");
  if(getToken){
    navigate('/dashboard')
    }else{
      setIsAuthenticated(false)
    }

})


  return (
    <div className='relative flex justify-center items-center'>
       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#53bd95]">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onHandleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={handleOnChange}
                  value={loginData.email}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between relative">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-500" onClick={()=>setIsOpenForget(true)}>
                    Forgot password?
                  </a>
                </div>
                
              </div>
              <div className="mt-2 relative transition-all duration-100">
                <input
                  id="password"
                  name="password"
                  type={passShow?'text':'password'}
                  autoComplete="current-password"
                  onChange={handleOnChange}
                  value={loginData.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className='absolute  bottom-[25%] right-[1%] bg-slate-50 px-2 '>
                  {
                    passShow?(<AiOutlineEyeInvisible size={20} className='cursor-pointer ' onClick={()=>(setPassShow(false))} />):(<AiOutlineEye size={20} className='cursor-pointer' onClick={()=>(setPassShow(true))}/>)
                  }
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#53bd95] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#47ab85] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#53bd95]"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account??{' '}
            <a href="/register" className="font-semibold leading-6 text-[#53bd95] hover:text-[#53bd95]">
              Signup
            </a>
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            Email Not verify?{' '}
       <a href="#" className="font-semibold leading-6 text-[#53bd95] hover:text-[#49ac86]" onClick={()=>setIsOpenVerify(true)}>
              Verify
            </a>
          </p>
        </div>
      
      </div>
        {/* Modal for mail verify for forget password------ */}
       <CustomeModals isOpenForget={isOpenForget} setIsOpenForget={setIsOpenForget} isOpenVerify={isOpenVerify} setIsOpenVerify={setIsOpenVerify} />
       <Toaster/>
    </div>
  )
}

export default Login