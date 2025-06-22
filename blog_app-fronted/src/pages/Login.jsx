import React, { useState, useContext, useEffect } from "react";
import CustomeModals from "../components/Modals";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { baseURL } from "../config";
import { Authcontext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineCloseSquare,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";

const Login = () => {
  const [isOpenForget, setIsOpenForget] = useState(false);
  const [isOpenVerify, setIsOpenVerify] = useState(false);
  const [passShow, setPassShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated, setLoginUser } = useContext(Authcontext);
  const navigate = useNavigate();
  const initialValue = {
    email: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(initialValue);

  const [testCredsFilled, setTestCredsFilled] = useState(false);
  // Test user credentials
  const testUser = {
    email: "testuserblogwrite@gmail.com",
    password: "Testuser@123",
  };

  // Function to fill test user data
  const fillTestUser = () => {
    setLoginData(testUser);
    setTestCredsFilled(true);
    toast.success("Test user credentials filled!");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }));
    // Reset test creds filled if user manually changes any field
    if (
      (name === "email" && value !== testUser.email) ||
      (name === "password" && value !== testUser.password)
    ) {
      setTestCredsFilled(false);
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.success("All fields are required");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${baseURL}/user/login`, loginData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200) {
        console.log(res.data);
        localStorage.setItem("blogAuth", JSON.stringify(res.data.token));
        localStorage.setItem("blogUser", JSON.stringify(res.data.data));
        setIsAuthenticated(true);
        setLoginUser(res.data.data);
        localStorage.setItem("loginMessage", "Login successfully");
        setLoading(false);
        navigate("/dashboard");
      }
      setLoginData({ email: "", password: "" });
    } catch (error) {
      if (error.response && error.response.status === 500) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("Sothing went wrong!");
      }
      console.log("error", error.message);
      setLoginData({ email: "", password: "" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const emailVerifyMess = localStorage.getItem("emailVerifyMessage");

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
      toast(
        (t) => (
          <span className="bg-black text-white flex flex-row w-full justify-between">
            {emailVerifyMess}
            <FaWindowClose
              size={25}
              onClick={() => toast.dismiss(t.id)}
              className="bg-red-500 text-white cursor-pointer rounded-[50%]"
            />
          </span>
        ),
        {
          duration: 20000,
          style: {
            backgroundColor: "black",
            color: "white",
            maxWidth: "500px",
            width: "100%",
            padding: "6px",
          },
        }
      );
      localStorage.removeItem("emailVerifyMessage");
    }
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem("blogAuth");
    if (getToken) {
      navigate("/dashboard");
    } else {
      setIsAuthenticated(false);
    }
  });

  return (
    <div className="relative flex justify-center items-center">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#53bd95]">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onHandleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-500"
                    onClick={() => setIsOpenForget(true)}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative transition-all duration-100">
                <input
                  id="password"
                  name="password"
                  type={passShow ? "text" : "password"}
                  autoComplete="current-password"
                  onChange={handleOnChange}
                  value={loginData.password}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <div className="absolute  bottom-[25%] right-[1%] bg-slate-50 px-2 ">
                  {passShow ? (
                    <AiOutlineEyeInvisible
                      size={20}
                      className="cursor-pointer "
                      onClick={() => setPassShow(false)}
                    />
                  ) : (
                    <AiOutlineEye
                      size={20}
                      className="cursor-pointer"
                      onClick={() => setPassShow(true)}
                    />
                  )}
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center items-center gap-2 rounded-md bg-[#53bd95] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#47ab85] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#53bd95] disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                )}
                {loading ? "Signing in..." : "Sign in"}
              </button>

              <button
                type="button"
                onClick={fillTestUser}
                disabled={testCredsFilled}
                className={`animate-gradient-borde flex w-full justify-center items-center gap-2 rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-blue-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset border-blue-400 border-2 mt-4 ${
                  testCredsFilled
                    ? "bg-gray-50 cursor-not-allowed text-gray-400" // Faded and disabled style
                    : "bg-gray50 hover:bg-gray-200 focus-visible:outline-gray-5-200" // Normal style
                }`}
              >
                Use Test Account
               <span className="relative flex items-center justify-center">
    <span className={`absolute -left-1 w-2 h-2 rounded-full ${
      testCredsFilled ? "bg-gray-400" : "animate-color-pulse"
    }`}></span>
    </span>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account??{" "}
            <a
              href="/register"
              className="font-semibold leading-6 text-[#53bd95] hover:text-[#53bd95]"
            >
              Signup
            </a>
          </p>
          <p className="mt-2 text-center text-sm text-gray-500">
            Email Not verify?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-[#53bd95] hover:text-[#49ac86]"
              onClick={() => setIsOpenVerify(true)}
            >
              Verify
            </a>
          </p>
        </div>
      </div>
      {/* Modal for mail verify for forget password------ */}
      <CustomeModals
        isOpenForget={isOpenForget}
        setIsOpenForget={setIsOpenForget}
        isOpenVerify={isOpenVerify}
        setIsOpenVerify={setIsOpenVerify}
      />
      <Toaster />
    </div>
  );
};

export default Login;
