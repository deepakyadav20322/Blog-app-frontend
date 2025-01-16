// import React, { useState } from 'react'
// import homePageSvg from '../assets/homePage.svg'
// import { Link } from 'react-router-dom'
// import homeVideo from '../assets/homeVideo.mp4'
// import FaqSection from '../components/FaqSection'
// import footerPromo from '../assets/footerPromo.webp'
// import quarterCircle from '../assets/quarterCircle.svg'
// import {BsArrowRight, BsFacebook} from 'react-icons/bs'
// import {AiFillLinkedin} from 'react-icons/ai'
// import {AiFillTwitterCircle} from 'react-icons/ai'
// import {AiFillInstagram} from 'react-icons/ai'

// const CompanyPage = () => {

//   const [isHovered, setIsHovered] = useState("");

//   const getGradientClass = () => {
//     switch (isHovered) {
//       case 'one':
//         return 'gradient-green';
//       case 'two':
//         return 'gradient-blue';
//       case 'three':
//         return 'gradient-yellow';
//       default:
//         return '';
//     }
//   };

//   return (
//     <>
//     <div className={`main-div py-3 flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start min-h-[85vh]  ${getGradientClass()} `}>

//      <div className='comp-left max-w-1/2 w-full flex justify-center items-center '>
//      <img src={homePageSvg} className=' h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-full' alt="" />
//      </div>
//      <div className='comp-right max-w-1/2 w-full h-full md:mt-10 text-center'>
//        <h1 className='text-4xl md:text5xl lg:text-7xl font-extrabold'>Creative content</h1>
//          <div className='flex flex-col justify-center items-start w-full  text-center'>
//           <p className='px-2 sm:px-16 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore incidunt iusto eligendi voluptatibus fuga suscipit, dolorum consequatur earum debitis deleniti ut quae et animi quod illo sequi magnam temporibus!</p>
//           <div className='flex flex-row justify-center items-center w-full'>
//           <Link className='  px-4 py-[0.4rem] bg-[#6695FF] rounded-[18px] font-bold  text-white my-4 '>Learn More</Link>
//           </div>
//          </div>

//          <div className={`color-change-cards flex flex-row justify-evenly  mt-24 }`}>
//          <div className='flex flex-col gap-y-2'>
//          <div className={`card-one w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='one' ? 'bg-blue-200  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('one')}
//             onMouseLeave={()=>setIsHovered('')}>
//            </div>
//            <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
//            onMouseEnter={()=>setIsHovered('one')}
//            onMouseLeave={()=>setIsHovered('')}
//            >company</Link>
//            </div>
//            <div className=' flex-col gap-y-2 hidden md:flex'>
//          <div className={`card-two w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='two' ? 'bg-blue-300  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('two')}
//             onMouseLeave={()=>setIsHovered('')}>
//            </div>
//            <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
//            onMouseEnter={()=>setIsHovered('two')}
//            onMouseLeave={()=>setIsHovered('')}
//            >company</Link>
//            </div>
//            <div className='flex flex-col gap-y-2'>
//          <div className={`card-three w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='three' ? 'bg-blue-400  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('three')}
//             onMouseLeave={()=>setIsHovered('')}>
//            </div>
//            <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
//            onMouseEnter={()=>setIsHovered('three')}
//            onMouseLeave={()=>setIsHovered('')}
//            >company</Link>
//            </div>

//            </div>
//          </div>
//      </div>
// {/* ------------------------- Second phase ------------------------- */}
//      <div className='flex flex-col-reverse lg:flex-row lg:justify-between justify-center w-full min-h-screen '>
//       <div className='w-full lg:w-[40%] flex  justify-center lg:justify-end  px-6'>
//          <div className='max-w-[50rem] w-full lg:w-[25rem] flex flex-col justify-center items-start mt-12 lg:mt-0'>
//           <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left'>Create blogs, with your, ideas and thinking in simple way.</h1>
//           <p className='text-center lg:text-left text-xl lg:text-2xl my-4 w-full'>Designs.ai helps you save time, cut costs, and simplify your workflow.</p>
//           <div className='my-8 text-center lg:text-start w-full'>
//             <Link className='px-5 py-3 bg-[#6695FF] text-white font-medium rounded-[6px]'>sign up for free </Link>
//           </div>
//          </div>
//          </div>
//          <div className='w-full lg:w-[60%] flex flex-row justify-center items-center'>
//          <video className= ' w-[350px] h-[200px] sm:w-[600px] sm:h-[350px] sm:p-0 p-2' autoPlay muted controls>
//           <source src={homeVideo} type='video/mp4' />
//           Your browser does not support the video tag.
//         </video>
//          </div>
//      </div>

//      {/* ------------------ third phase ------------------------------------ */}

//   <div className='relative w-screen h-[470px] bg-[#5d8ef6] flex flex-row justify-between items-center px-6'>
//     <div className='absolute left-0 bottom-0 hidden lg:block'>
//       <img src={quarterCircle} alt="" />
//     </div>
//       <div className='w-full md:w-[50%] h-full relative hidden sm:block '>
//         <img src={footerPromo} alt="" className='object-cover w-[250px] lg:w-[350px] absolute right-20 top-10 lg:-right-[9rem] '  />
//         <div className='font-medium  text-lg p-12 pt-20 w-[70%] text-white hidden lg:block '>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis labore tempora hic at eum atque itaque recusandae corporis minima?</p>
//           <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis labore tempora hic at eum atque itaque recusandae corporis minima?</p>
//         </div>
//       </div>
//       <div className='w-[100%] lg:w-[35%] flex flex-col justify-center items-center gap-6'>
//         <p className=' text-4xl px-3 text-white '>Start continuously improving your learning today.</p>
//         <button className='px-4 py-2 text-white bg-black font-medium text-xl rounded-[12px]'>Try for free</button>
//         <p className='text-xl text-white cursor-pointer'>speak with expert<BsArrowRight className='inline ml-2' /></p>
//       </div>
//       <div className=''></div>
//   </div>

//      {/* ------------------ fourth phase ----------------------- */}

//      <div className='bg-[#F8F6FF] py-10 min-h-screen  w- flex flex-col items-center justify-center'>
//       <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions (FAQs)</h1>
//       <FaqSection/>
//       <div className='flex justify-center items-center'>
//       <Link className='text-[#824179] hover:border-b-[1px] border-[#824179]  text-center'>Click here for individual product FAQs</Link>
//      </div>
//      </div>

//  {/* ------------------ footer section ----------------------- */}

//  <footer>
//   <div className='w-full min-h-[24rem] bg-[#272F40] text-white py-8 px-4'>
//     <div className='flex flex-col md:flex-row justify-around items-start'>
//       <div className='flex flex-col items-center md:items-start '>
//     <p className='text-3xl font-bold'>Blog@Wright</p>
//     <div className='flex flex-row justify-start items-center gap-x-12 mr-4 mt-6'>
//      <BsFacebook size={40} color='white' className='rounded-full p-2'/>
//      <AiFillInstagram size={40} color='white'  className='rounded-full p-2'/>
//      <AiFillTwitterCircle size={40} color='white'  className='rounded-full p-2'/>
//      <AiFillLinkedin size={40} color='white'  className='rounded-full p-2'/>
//   </div>
//    <div className='contact-form mt-6'>
//     <form action="" className='flex flex-col gap-y-2'>
//       <label htmlFor="cont">
//         Subscribe for news letter
//       </label>
//       <input type="email" placeholder='Entre Email'className='min-w-[250px] rounded-[6px] outline-none text-black' />
//     </form>
//    </div>
//   </div>

//     <div className='grid grid-cols-3 gap-16 pt-4 md:pt-0 md:mx-4'>
//       <div>
//     <p className='mb-5 text-blue-600'>Topics</p>
//        <p>creative Blogs</p>
//        <p>Frontend design</p>
//        <p>server creation</p>
//        <p>web Animation</p>
//        <p>Databases</p>
//        <p>Web server</p>
//       </div>

//     <div>
//       <p className='mb-5 text-blue-600'>Documentation</p>
//       <p>creative Blogs</p>
//        <p>Frontend design</p>
//        <p>server creation</p>
//        <p>web Animation</p>
//        <p>Databases</p>
//        <p>Web server</p>
//     </div>
//     <div className='hidden md:block'>
//       <p className='mb-5 text-blue-600'>Products</p>
//       <p>creative Blogs</p>
//        <p>Frontend design</p>
//        <p>server creation</p>
//        <p>web Animation</p>
//        <p>Databases</p>
//        <p>Web server</p>
//     </div>
//     </div>
//   </div>

//  <div className='text-center text-base  uppercase mt-6'>
//   All copyrights &copy;  reserved .
//  </div>
//   </div>
//  </footer>

// </>

//   )
// }

// export default CompanyPage

import React from "react";
import { FaCode, FaPenNib, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { baseURL } from "../config";
import BenefitsSection from "../components/benefits";

const CompanyPage = () => {
  return (
    <div>
      {/* Hero Section--------------------------- */}
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
              Discover. Learn. <span className="text-[#53bd95]">Grow.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Embark on a journey of knowledge with our curated blog. Explore
              insightful articles that spark curiosity and fuel your
              intellectual growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="/start-reading"
                className="bg-[#53bd95] text-white text-sm md:text-base font-semibold py-2 md:py-3 px-3 md:px-6 rounded-lg flex items-center space-x-2 hover:bg-green-600 transition duration-300"
              >
                <span>Start Reading</span>
                <span>{"->"}</span>
              </a>

              <a
                href="/subscribe"
                className="border border-black text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Subscribe Now
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Find Your Next Read
            </h2>
            <form className="mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                // type="submit"
                className="bg-black text-white w-full py-2 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
              >
                Search
              </button>
            </form>
            <div>
              <p className="text-gray-700 font-medium mb-2">Trending topics:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  AI
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Climate
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Innovation
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Health
                </span>
                <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium">
                  Tech
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
            <div className="text-black mb-4 text-2xl">⚡</div>
            <h3 className="font-semibold text-lg text-gray-900">
              Daily Insights
            </h3>
            <p className="text-gray-600">Fresh content to keep you informed</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
            <div className="text-black mb-4 text-2xl">📘</div>
            <h3 className="font-semibold text-lg text-gray-900">
              Expert Authors
            </h3>
            <p className="text-gray-600">Learn from industry leaders</p>
          </div>
          <div className="text-center bg-gray-50 p-6 rounded-lg shadow">
            <div className="text-black mb-4 text-2xl">👥</div>
            <h3 className="font-semibold text-lg text-gray-900">Community</h3>
            <p className="text-gray-600">Engage in thoughtful discussions</p>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section id="blog" className="py-16 bg-gray-100">
        <div className="container max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-8">Featured Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              href={`/singleBlog/653d1ea51fafc7b6b420c95c`}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={`/cssImg.jpg`}
                alt="Post 1"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold mb-2">
                Advanced Guide to CSS Selectors: Every Web Developer must Know
              </h4>
              <p className="text-gray-600">
                A brief summary of the blog post goes here...
              </p>
            </a>
            <a
              href={`/singleBlog/6534c441b18f1f0dbc224d99`}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src="/codeIncome.jpg"
                alt="Post 2"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">
                Code Your Way to Extra Income: A Developer’s Lookbook Angesh
              </h4>
              <p className="text-gray-600">
                A brief summary of the blog post goes here...
              </p>
            </a>
            <a
              href={`/singleBlog/651e89a54bb61c7b5e2abd5b`}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={"/codeImg.png"}
                alt="Post 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-2xl font-bold mb-2">
                25 Tips I Wish I Knew Before I Started to Code And
              </h4>
              <p className="text-gray-600">
                A brief summary of the blog post goes here...
              </p>
            </a>
          </div>
        </div>
      </section>

      <BenefitsSection />

      {/* About section--- */}

      <section id="about" className="py-16 bg-gray-100">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-600 mb-12">
            We provide insightful blogs across multiple domains, helping readers
            stay updated with the latest trends in technology, creativity, and
            more.
          </p>

          {/* Creative Blog Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-blue-100 transition-all duration-300">
              <FaCode className="text-5xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Tech Blogs</h3>
              <p className="text-gray-600">
                Stay updated with the latest advancements in web development,
                programming, and AI.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-green-100 transition-all duration-300">
              <FaPenNib className="text-5xl text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Creative Writing</h3>
              <p className="text-gray-600">
                Explore our creative writing section for amazing stories,
                poetry, and writing tips.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-red-100 transition-all duration-300">
              <FaChartLine className="text-5xl text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">
                Business & Finance
              </h3>
              <p className="text-gray-600">
                Discover insights into the business world, investment
                strategies, and financial tips.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:bg-purple-100 transition-all duration-300">
              <FaMobileAlt className="text-5xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Mobile Trends</h3>
              <p className="text-gray-600">
                Stay on top of mobile app development trends, user experience
                design, and the future of mobile technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompanyPage;
