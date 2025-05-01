// // import React, { useState } from 'react'
// // import homePageSvg from '../assets/homePage.svg'
// // import { Link } from 'react-router-dom'
// // import homeVideo from '../assets/homeVideo.mp4'
// // import FaqSection from '../components/FaqSection'
// // import footerPromo from '../assets/footerPromo.webp'
// // import quarterCircle from '../assets/quarterCircle.svg'
// // import {BsArrowRight, BsFacebook} from 'react-icons/bs'
// // import {AiFillLinkedin} from 'react-icons/ai'
// // import {AiFillTwitterCircle} from 'react-icons/ai'
// // import {AiFillInstagram} from 'react-icons/ai'

// // const CompanyPage = () => {

// //   const [isHovered, setIsHovered] = useState("");

// //   const getGradientClass = () => {
// //     switch (isHovered) {
// //       case 'one':
// //         return 'gradient-green';
// //       case 'two':
// //         return 'gradient-blue';
// //       case 'three':
// //         return 'gradient-yellow';
// //       default:
// //         return '';
// //     }
// //   };

// //   return (
// //     <>
// //     <div className={`main-div py-3 flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start min-h-[85vh]  ${getGradientClass()} `}>

// //      <div className='comp-left max-w-1/2 w-full flex justify-center items-center '>
// //      <img src={homePageSvg} className=' h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-full' alt="" />
// //      </div>
// //      <div className='comp-right max-w-1/2 w-full h-full md:mt-10 text-center'>
// //        <h1 className='text-4xl md:text5xl lg:text-7xl font-extrabold'>Creative content</h1>
// //          <div className='flex flex-col justify-center items-start w-full  text-center'>
// //           <p className='px-2 sm:px-16 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore incidunt iusto eligendi voluptatibus fuga suscipit, dolorum consequatur earum debitis deleniti ut quae et animi quod illo sequi magnam temporibus!</p>
// //           <div className='flex flex-row justify-center items-center w-full'>
// //           <Link className='  px-4 py-[0.4rem] bg-[#6695FF] rounded-[18px] font-bold  text-white my-4 '>Learn More</Link>
// //           </div>
// //          </div>

// //          <div className={`color-change-cards flex flex-row justify-evenly  mt-24 }`}>
// //          <div className='flex flex-col gap-y-2'>
// //          <div className={`card-one w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='one' ? 'bg-blue-200  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('one')}
// //             onMouseLeave={()=>setIsHovered('')}>
// //            </div>
// //            <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
// //            onMouseEnter={()=>setIsHovered('one')}
// //            onMouseLeave={()=>setIsHovered('')}
// //            >company</Link>
// //            </div>
// //            <div className=' flex-col gap-y-2 hidden md:flex'>
// //          <div className={`card-two w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='two' ? 'bg-blue-300  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('two')}
// //             onMouseLeave={()=>setIsHovered('')}>
// //            </div>
// //            <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
// //            onMouseEnter={()=>setIsHovered('two')}
// //            onMouseLeave={()=>setIsHovered('')}
// //            >company</Link>
// //            </div>
// //            <div className='flex flex-col gap-y-2'>
// //          <div className={`card-three w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='three' ? 'bg-blue-400  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('three')}
// //             onMouseLeave={()=>setIsHovered('')}>
// //            </div>
// //            <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
// //            onMouseEnter={()=>setIsHovered('three')}
// //            onMouseLeave={()=>setIsHovered('')}
// //            >company</Link>
// //            </div>

// //            </div>
// //          </div>
// //      </div>
// // {/* ------------------------- Second phase ------------------------- */}
// //      <div className='flex flex-col-reverse lg:flex-row lg:justify-between justify-center w-full min-h-screen '>
// //       <div className='w-full lg:w-[40%] flex  justify-center lg:justify-end  px-6'>
// //          <div className='max-w-[50rem] w-full lg:w-[25rem] flex flex-col justify-center items-start mt-12 lg:mt-0'>
// //           <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left'>Create blogs, with your, ideas and thinking in simple way.</h1>
// //           <p className='text-center lg:text-left text-xl lg:text-2xl my-4 w-full'>Designs.ai helps you save time, cut costs, and simplify your workflow.</p>
// //           <div className='my-8 text-center lg:text-start w-full'>
// //             <Link className='px-5 py-3 bg-[#6695FF] text-white font-medium rounded-[6px]'>sign up for free </Link>
// //           </div>
// //          </div>
// //          </div>
// //          <div className='w-full lg:w-[60%] flex flex-row justify-center items-center'>
// //          <video className= ' w-[350px] h-[200px] sm:w-[600px] sm:h-[350px] sm:p-0 p-2' autoPlay muted controls>
// //           <source src={homeVideo} type='video/mp4' />
// //           Your browser does not support the video tag.
// //         </video>
// //          </div>
// //      </div>

// //      {/* ------------------ third phase ------------------------------------ */}

// //   <div className='relative w-screen h-[470px] bg-[#5d8ef6] flex flex-row justify-between items-center px-6'>
// //     <div className='absolute left-0 bottom-0 hidden lg:block'>
// //       <img src={quarterCircle} alt="" />
// //     </div>
// //       <div className='w-full md:w-[50%] h-full relative hidden sm:block '>
// //         <img src={footerPromo} alt="" className='object-cover w-[250px] lg:w-[350px] absolute right-20 top-10 lg:-right-[9rem] '  />
// //         <div className='font-medium  text-lg p-12 pt-20 w-[70%] text-white hidden lg:block '>
// //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis labore tempora hic at eum atque itaque recusandae corporis minima?</p>
// //           <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis labore tempora hic at eum atque itaque recusandae corporis minima?</p>
// //         </div>
// //       </div>
// //       <div className='w-[100%] lg:w-[35%] flex flex-col justify-center items-center gap-6'>
// //         <p className=' text-4xl px-3 text-white '>Start continuously improving your learning today.</p>
// //         <button className='px-4 py-2 text-white bg-black font-medium text-xl rounded-[12px]'>Try for free</button>
// //         <p className='text-xl text-white cursor-pointer'>speak with expert<BsArrowRight className='inline ml-2' /></p>
// //       </div>
// //       <div className=''></div>
// //   </div>

// //      {/* ------------------ fourth phase ----------------------- */}

// //      <div className='bg-[#F8F6FF] py-10 min-h-screen  w- flex flex-col items-center justify-center'>
// //       <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions (FAQs)</h1>
// //       <FaqSection/>
// //       <div className='flex justify-center items-center'>
// //       <Link className='text-[#824179] hover:border-b-[1px] border-[#824179]  text-center'>Click here for individual product FAQs</Link>
// //      </div>
// //      </div>

// //  {/* ------------------ footer section ----------------------- */}

// //  <footer>
// //   <div className='w-full min-h-[24rem] bg-[#272F40] text-white py-8 px-4'>
// //     <div className='flex flex-col md:flex-row justify-around items-start'>
// //       <div className='flex flex-col items-center md:items-start '>
// //     <p className='text-3xl font-bold'>Blog@Wright</p>
// //     <div className='flex flex-row justify-start items-center gap-x-12 mr-4 mt-6'>
// //      <BsFacebook size={40} color='white' className='rounded-full p-2'/>
// //      <AiFillInstagram size={40} color='white'  className='rounded-full p-2'/>
// //      <AiFillTwitterCircle size={40} color='white'  className='rounded-full p-2'/>
// //      <AiFillLinkedin size={40} color='white'  className='rounded-full p-2'/>
// //   </div>
// //    <div className='contact-form mt-6'>
// //     <form action="" className='flex flex-col gap-y-2'>
// //       <label htmlFor="cont">
// //         Subscribe for news letter
// //       </label>
// //       <input type="email" placeholder='Entre Email'className='min-w-[250px] rounded-[6px] outline-none text-black' />
// //     </form>
// //    </div>
// //   </div>

// //     <div className='grid grid-cols-3 gap-16 pt-4 md:pt-0 md:mx-4'>
// //       <div>
// //     <p className='mb-5 text-blue-600'>Topics</p>
// //        <p>creative Blogs</p>
// //        <p>Frontend design</p>
// //        <p>server creation</p>
// //        <p>web Animation</p>
// //        <p>Databases</p>
// //        <p>Web server</p>
// //       </div>

// //     <div>
// //       <p className='mb-5 text-blue-600'>Documentation</p>
// //       <p>creative Blogs</p>
// //        <p>Frontend design</p>
// //        <p>server creation</p>
// //        <p>web Animation</p>
// //        <p>Databases</p>
// //        <p>Web server</p>
// //     </div>
// //     <div className='hidden md:block'>
// //       <p className='mb-5 text-blue-600'>Products</p>
// //       <p>creative Blogs</p>
// //        <p>Frontend design</p>
// //        <p>server creation</p>
// //        <p>web Animation</p>
// //        <p>Databases</p>
// //        <p>Web server</p>
// //     </div>
// //     </div>
// //   </div>

// //  <div className='text-center text-base  uppercase mt-6'>
// //   All copyrights &copy;  reserved .
// //  </div>
// //   </div>
// //  </footer>

// // </>

// //   )
// // }

// // export default CompanyPage

// import React from "react";
// import { FaCode, FaPenNib, FaChartLine, FaMobileAlt } from "react-icons/fa";
// import { baseURL } from "../config";
// import BenefitsSection from "../components/benefits";

// const CompanyPage = () => {
//   return (
//     <div>
//       {/* Hero Section--------------------------- */}
//       <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
//               Discover. Learn. <span className="text-[#53bd95]">Grow.</span>
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Embark on a journey of knowledge with our curated blog. Explore
//               insightful articles that spark curiosity and fuel your
//               intellectual growth.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="/"
//                 className="bg-[#53bd95] text-white text-sm md:text-base font-semibold py-2 md:py-3 px-3 md:px-6 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition duration-300"
//               >
//                 <span>Start Reading</span>
//                 <span>{"->"}</span>
//               </a>

//               <a
//                 href="#subscribe"
//                 className="border border-black text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
//               >
//                 Subscribe Now
//               </a>
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="bg-gray-100 p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Find Your Next Read
//             </h2>
//             <form className="mb-6">
//               <input
//                 type="text"
//                 placeholder="Search articles..."
//                 className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
//               />
//               <button
//                 // type="submit"
//                 className="bg-black text-white w-full py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
//               >
//                 Search
//               </button>
//             </form>
//             <div>
//               <p className="text-gray-700 font-medium mb-2">Trending topics:</p>
//               <div className="flex flex-wrap gap-2">
//                 <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
//                   AI
//                 </span>
//                 <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
//                   Climate
//                 </span>
//                 <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
//                   Innovation
//                 </span>
//                 <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
//                   Health
//                 </span>
//                 <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
//                   Tech
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Features Section */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
//             <div className="text-black mb-4 text-2xl">⚡</div>
//             <h3 className="font-semibold text-lg text-gray-900">
//               Daily Insights
//             </h3>
//             <p className="text-gray-600">Fresh content to keep you informed</p>
//           </div>
//           <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
//             <div className="text-black mb-4 text-2xl">📘</div>
//             <h3 className="font-semibold text-lg text-gray-900">
//               Expert Authors
//             </h3>
//             <p className="text-gray-600">Learn from industry leaders</p>
//           </div>
//           <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
//             <div className="text-black mb-4 text-2xl">👥</div>
//             <h3 className="font-semibold text-lg text-gray-900">Community</h3>
//             <p className="text-gray-600">Engage in thoughtful discussions</p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Posts Section */}
//       <section id="blog" className="py-16 bg-gray-100">
//         <div className="container max-w-7xl mx-auto text-center">
//           <h3 className="text-3xl font-semibold mb-8">Featured Posts</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <a
//               href={`/singleBlog/653d1ea51fafc7b6b420c95c`}
//               className="bg-white p-6 rounded-lg shadow-lg"
//             >
//               <img
//                 src={`/cssImg.jpg`}
//                 alt="Post 1"
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h4 className="text-xl font-bold mb-2">
//                 Advanced Guide to CSS Selectors: Every Web Developer must Know
//               </h4>
//               <p className="text-gray-600">
//                 A brief summary of the blog post goes here...
//               </p>
//             </a>
//             <a
//               href={`/singleBlog/6534c441b18f1f0dbc224d99`}
//               className="bg-white p-6 rounded-lg shadow-lg"
//             >
//               <img
//                 src="/codeIncome.jpg"
//                 alt="Post 2"
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h4 className="text-2xl font-bold mb-2">
//                 Code Your Way to Extra Income: A Developer’s Lookbook Angesh
//               </h4>
//               <p className="text-gray-600">
//                 A brief summary of the blog post goes here...
//               </p>
//             </a>
//             <a
//               href={`/singleBlog/651e89a54bb61c7b5e2abd5b`}
//               className="bg-white p-6 rounded-lg shadow-lg"
//             >
//               <img
//                 src={"/codeImg.png"}
//                 alt="Post 3"
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h4 className="text-2xl font-bold mb-2">
//                 25 Tips I Wish I Knew Before I Started to Code And
//               </h4>
//               <p className="text-gray-600">
//                 A brief summary of the blog post goes here...
//               </p>
//             </a>
//           </div>
//         </div>
//       </section>

//       <BenefitsSection />

//       {/* About section--- */}

//       <section id="about" className="py-16 bg-gray-100">
//         <div className="container max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-bold mb-8">About Us</h2>
//           <p className="text-lg text-gray-600 mb-12">
//             We provide insightful blogs across multiple domains, helping readers
//             stay updated with the latest trends in technology, creativity, and
//             more.
//           </p>

//           {/* Creative Blog Categories */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300">
//               <FaCode className="text-5xl text-blue-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">Tech Blogs</h3>
//               <p className="text-gray-600">
//                 Stay updated with the latest advancements in web development,
//                 programming, and AI.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300">
//               <FaPenNib className="text-5xl text-green-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">Creative Writing</h3>
//               <p className="text-gray-600">
//                 Explore our creative writing section for amazing stories,
//                 poetry, and writing tips.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-red-100 transition-all duration-300">
//               <FaChartLine className="text-5xl text-red-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">
//                 Business & Finance
//               </h3>
//               <p className="text-gray-600">
//                 Discover insights into the business world, investment
//                 strategies, and financial tips.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300">
//               <FaMobileAlt className="text-5xl text-purple-500 mx-auto mb-4" />
//               <h3 className="text-2xl font-semibold mb-2">Mobile Trends</h3>
//               <p className="text-gray-600">
//                 Stay on top of mobile app development trends, user experience
//                 design, and the future of mobile technology.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-900 text-white py-8">
//   <div className="container mx-auto px-4">
//     <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
//       <p className="text-sm md:text-base">&copy; 2024 My Blog. All rights reserved.</p>
//       <div className="flex space-x-4 mt-4 md:mt-0">
//         <a
//           href="#"
//           className="hover:text-gray-400 transition-colors duration-300"
//           aria-label="Facebook"
//         >
//           Facebook
//         </a>
//         <a
//           href="#"
//           className="hover:text-gray-400 transition-colors duration-300"
//           aria-label="Twitter"
//         >
//           Twitter
//         </a>
//         <a
//           href="#"
//           className="hover:text-gray-400 transition-colors duration-300"
//           aria-label="LinkedIn"
//         >
//           LinkedIn
//         </a>
//       </div>
//     </div>
//     <div className="flex flex-col md:flex-row justify-center md:justify-between mt-6 text-xs md:text-sm text-gray-400">
//       <a href="#" className="hover:text-white transition-colors duration-300">
//         Privacy Policy
//       </a>
//       <a href="#" className="hover:text-white transition-colors duration-300">
//         Terms of Service
//       </a>
//       <a href="#" className="hover:text-white transition-colors duration-300">
//         Contact Us
//       </a>
//     </div>
//   </div>
// </footer>

//     </div>
//   );
// };

// export default CompanyPage;
// =====================================================================

import { useState } from "react"
import {
  FaCode,
  FaPenNib,
  FaChartLine,
  FaMobileAlt,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa"
import BenefitsSection from "../components/benefits";

const CompanyPage = () => {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-1 lg:order-1 animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Discover. Learn. <span className="text-[#53bd95]">Grow.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Embark on a journey of knowledge with our curated blog. Explore insightful articles that spark curiosity
                and fuel your intellectual growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="bg-[#53bd95] text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-[#3da77f] transition duration-300 transform hover:translate-y-[-2px] shadow-md"
                >
                  <span>Start Reading</span>
                  <FaArrowRight />
                </a>
                <a
                  href="#subscribe"
                  className="border-2 border-gray-800 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300 transform hover:translate-y-[-2px] shadow-sm"
                >
                  Subscribe Now
                </a>
              </div>
            </div>

            {/* Right Content - Featured Content Card */}
            <div className="order-1 lg:order-2 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl text-white transform hover:shadow-2xl transition-all duration-300 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Discover Content</h2>
                <div className="bg-[#53bd95] p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>

              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg p-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#53bd95] transition-all text-white placeholder-gray-400"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="bg-blue-500 h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Most Popular</h3>
                    <p className="text-sm text-gray-400">See what's trending now</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="bg-purple-500 h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Editor's Choice</h3>
                    <p className="text-sm text-gray-400">Handpicked by our team</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="bg-green-500 h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Latest Updates</h3>
                    <p className="text-sm text-gray-400">Fresh content daily</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "Daily Insights", desc: "Fresh content to keep you informed" },
              { icon: "📘", title: "Expert Authors", desc: "Learn from industry leaders" },
              { icon: "👥", title: "Community", desc: "Engage in thoughtful discussions" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#53bd95] opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>
      </section>

      {/* Featured Posts Section with Tabs */}
      <section id="blog" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Posts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular articles across various categories
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["all", "technology", "design",].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab ? "bg-[#53bd95] text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/cssImg.jpg",
                title: "Advanced Guide to CSS Selectors: Every Web Developer Must Know",
                category: "technology",
                readTime: "8 min read",
                link:'/singleBlog/653d1ea51fafc7b6b420c95c'
              },
              {
                img: "/codeImg.png",
                title: "Code Your Way to Extra Income: A Developer's Lookbook",
                category: "business",
                readTime: "12 min read",
                link:"/singleBlog/6534c441b18f1f0dbc224d99"
              },
              {
                img: "/codeIncome.jpg",
                title: "25 Tips I Wish I Knew Before I Started to Code",
                category: "technology",
                readTime: "10 min read",
                link:"/singleBlog/651e89a54bb61c7b5e2abd5b"
              },
              {
                img: "/web-design.jpg",
                title: "The Future of Web Design: Trends to Watch in 2024",
                category: "design",
                readTime: "7 min read",
                link:"singleBlog/651e2025683ba7c43610d5f1"
              },
              {
                img: "/creative-thinking.jpg",
                title: "Mastering Creative Thinking: Exercises for Developers",
                category: "creativity",
                readTime: "9 min read",
                link:"singleBlog/6522bddbb8493db90156414e"
              },
              {
                img: "/codeImg.png",
                title: "Building a Sustainable Business Model for Your Tech Startup",
                category: "business",
                readTime: "15 min read",
                link:'singleBlog/651e2025683ba7c43610d5f1'
              },
            ]
              .filter((post) => activeTab === "all" || post.category === activeTab)
              .map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.img || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.readTime}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-[#53bd95] text-sm font-semibold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#53bd95] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      A brief summary of this insightful article that will captivate readers and make them want to learn
                      more...
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mt-auto">
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        May 12, 2024
                      </span>
                    </div>
                  </div>
                </a>
              ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <a href="/" className="inline-flex items-center gap-2 text-[#53bd95] font-semibold hover:underline">
              View all articles
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        id="subscribe"
        className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-8"
      >
        <div className="container max-w-5xl mx-auto">
          <div className="bg-[#53bd95] bg-opacity-10 p-8 sm:p-12 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated</h2>
                <p className="text-gray-200 mb-6">
                  Subscribe to our newsletter and never miss our latest content, updates, and offers.
                </p>
                <ul className="space-y-2">
                  {["Weekly curated articles", "Exclusive content", "Early access to new features"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-[#53bd95] mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#53bd95]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#53bd95]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#53bd95] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#3da77f] transition duration-300 shadow-lg"
                  >
                    Subscribe Now
                  </button>
                  <p className="text-xs text-center text-gray-400 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Categories */}
      <section id="about" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Our Blog</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide insightful content across multiple domains, helping readers stay updated with the latest trends
              in technology, creativity, and more.
            </p>
          </div>

          {/* Blog Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCode className="text-5xl text-blue-500" />,
                title: "Tech Blogs",
                desc: "Stay updated with the latest advancements in web development, programming, and AI.",
                color: "blue",
              },
              {
                icon: <FaPenNib className="text-5xl text-green-500" />,
                title: "Creative Writing",
                desc: "Explore our creative writing section for amazing stories, poetry, and writing tips.",
                color: "green",
              },
              {
                icon: <FaChartLine className="text-5xl text-red-500" />,
                title: "Business & Finance",
                desc: "Discover insights into the business world, investment strategies, and financial tips.",
                color: "red",
              },
              {
                icon: <FaMobileAlt className="text-5xl text-purple-500" />,
                title: "Mobile Trends",
                desc: "Stay on top of mobile app development trends, user experience design, and the future of mobile technology.",
                color: "purple",
              },
            ].map((category, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 ${
                  category.color === "blue"
                    ? "border-blue-500"
                    : category.color === "green"
                      ? "border-green-500"
                      : category.color === "red"
                        ? "border-red-500"
                        : "border-purple-500"
                }`}
              >
                <div className="flex justify-center mb-6">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-center">{category.title}</h3>
                <p className="text-gray-600 text-center">{category.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     < BenefitsSection/>

      {/* Testimonials Section - NEW */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Readers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover why thousands of readers trust our blog for their daily dose of knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "This blog has become my go-to resource for staying updated with the latest tech trends. The articles are well-researched and easy to understand.",
                author: "Sarah Johnson",
                role: "Software Developer",
              },
              {
                quote:
                  "I've learned so much from the creative writing section. The tips have significantly improved my storytelling skills and writing process.",
                author: "Michael Chen",
                role: "Content Creator",
              },
              {
                quote:
                  "The business insights provided here have been invaluable for my startup. Practical advice that actually works in the real world.",
                author: "Jessica Williams",
                role: "Entrepreneur",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="inline-block h-5 w-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - NEW */}
      <section className="py-16 bg-[#53bd95] text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Articles Published" },
              { number: "50k+", label: "Monthly Readers" },
              { number: "100+", label: "Expert Contributors" },
              { number: "15+", label: "Categories" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-gray-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - NEW */}
      <section className="py-20 bg-gray-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Join thousands of readers who trust our blog for insightful content that helps them grow personally and
            professionally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-[#53bd95] text-white font-semibold py-3 px-8 rounded-lg flex items-center gap-2 hover:bg-[#3da77f] transition duration-300 shadow-lg"
            >
              <span>Get Started</span>
              <FaArrowRight />
            </a>
            <a
              href="/"
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Blog@Wright</h3>
              <p className="text-gray-400 mb-6">
                Your source for insightful content across technology, creativity, business, and more.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#53bd95] transition-colors">
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#53bd95] transition-colors">
                  <FaTwitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#53bd95] transition-colors">
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-[#53bd95] transition-colors">
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Home", "About", "Blog", "Contact", "Privacy Policy", "Terms of Service"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Categories</h3>
              <ul className="space-y-3">
                {["Technology", "Design", "Business", "Creativity", "Mobile", "Development", "Writing"].map(
                  (category) => (
                    <li key={category}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {category}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <p className="text-gray-400 mb-4">Get the latest updates directly to your inbox.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#53bd95]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#53bd95] text-white font-semibold py-3 rounded-lg hover:bg-[#3da77f] transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Blog@Wright. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CompanyPage
