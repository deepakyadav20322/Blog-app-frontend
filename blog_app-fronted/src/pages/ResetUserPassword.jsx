import React,{useState} from 'react'
import { toast,Toaster } from 'react-hot-toast';
import { baseURL } from '../config';
import { useParams } from 'react-router-dom';
import axios from 'axios';



const ResetUserPassword = () => {
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const q1 = queryParams.get('uuid') 

    const initialValue = {newPassword:"",CnewPassword:""};
    const [resetPassData,setResetPassData] = useState(initialValue)
    const {uuid} = useParams()
    console.log(uuid)
    const handleOnChange = (e)=>{
        const {name,value} = e.target;
        setResetPassData((previousData)=>({
            ...previousData,[name]:value
        }))
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res = await axios.post(`${baseURL}/user/resetPassword/${uuid}`,resetPassData,{
                headers:{
                    'Content-Type':'application/json'
                }
            });
            if(res.status===200){
                console.log(res.data)
                setResetPassData(initialValue);
            }
            
        } catch (error) {
            console.log(error);
             toast.error('Something went wrong')
        }
    }

  return (
    <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium leading-6 text-gray-900">
               New Password
              </label>
              <div className="mt-2">
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  autoComplete="newPassword"
                  value={resetPassData.newPassword}
                  onChange={handleOnChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="CnewPassword" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm new Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="CnewPassword"
                  name="CnewPassword"
                  type="password"
                  value={resetPassData.CnewPassword}
                  onChange={handleOnChange}
                  autoComplete="CnewPassword"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Go to{' '}
            <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
             Login
            </a>
          </p>
        </div>
      </div>
  <Toaster/>
    </>
  )
}

export default ResetUserPassword