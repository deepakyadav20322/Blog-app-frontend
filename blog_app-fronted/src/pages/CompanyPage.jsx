import React, { useState } from 'react'
import homePageSvg from '../assets/homePage.svg'
import { Link } from 'react-router-dom'
import homeVideo from '../assets/homeVideo.mp4'
import FaqSection from '../components/FaqSection'



const CompanyPage = () => {

  const [isHovered, setIsHovered] = useState("");
 
  const getGradientClass = () => {
    switch (isHovered) {
      case 'one':
        return 'gradient-green';
      case 'two':
        return 'gradient-blue';
      case 'three':
        return 'gradient-yellow';
      default:
        return '';
    }
  };

  return (
    <>
    <div className={`main-div py-3 flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start min-h-[85vh]  ${getGradientClass()} `}>

     <div className='comp-left max-w-1/2 w-full flex justify-center items-center '>
     <img src={homePageSvg} className=' h-[50vh] md:h-[70vh] lg:h-[80vh] rounded-full' alt="" />
     </div>
     <div className='comp-right max-w-1/2 w-full h-full md:mt-10 text-center'>
       <h1 className='text-4xl md:text5xl lg:text-7xl font-extrabold'>Creative content</h1>
         <div className='flex flex-col justify-center items-start w-full  text-center'>
          <p className='px-2 sm:px-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo tempore incidunt iusto eligendi voluptatibus fuga suscipit, dolorum consequatur earum debitis deleniti ut quae et animi quod illo sequi magnam temporibus!</p> 
          <div className='flex flex-row justify-center items-center w-full'>
          <Link className='  px-3 py-[0.4rem] bg-[#6695FF] rounded-[18px] font-bold  text-white my-4 '>Learn More</Link>
          </div>
         </div>
         
         <div className={`color-change-cards flex flex-row justify-evenly  mt-28 }`}>
         <div className='flex flex-col gap-y-4'>
         <div className={`card-one w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='one' ? 'bg-blue-200  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('one')}
            onMouseLeave={()=>setIsHovered('')}>
           </div>
           <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
           onMouseEnter={()=>setIsHovered('one')}
           onMouseLeave={()=>setIsHovered('')}
           >deepak</Link>
           </div>
           <div className='flex flex-col gap-y-4'>
         <div className={`card-two w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='two' ? 'bg-blue-300  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('two')}
            onMouseLeave={()=>setIsHovered('')}>
           </div>
           <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
           onMouseEnter={()=>setIsHovered('two')}
           onMouseLeave={()=>setIsHovered('')}
           >deepak</Link>
           </div>
           <div className='flex flex-col gap-y-4'>
         <div className={`card-three w-36 h-36 border-2 border-gray-400 hover-div cursor-pointer transition-transform duration-200 ease-linear ${isHovered=='three' ? 'bg-blue-400  -translate-y-6' : ''} `} onMouseEnter={()=>setIsHovered('three')}
            onMouseLeave={()=>setIsHovered('')}>
           </div>
           <Link className={`px-3 py-2 rounded-full bg-slate-700 text-white font-medium ${getGradientClass()}`}
           onMouseEnter={()=>setIsHovered('three')}
           onMouseLeave={()=>setIsHovered('')}
           >deepak</Link>
           </div>
        
           </div>
         </div>
     </div>
{/* ------------------------- Second phase ------------------------- */}
     <div className='flex flex-col-reverse lg:flex-row lg:justify-between justify-center w-full min-h-screen '>
      <div className='w-full lg:w-[40%] flex  justify-center lg:justify-end  px-6'>
         <div className='max-w-[50rem] w-full lg:w-[25rem] flex flex-col justify-center items-start mt-12 lg:mt-0'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left'>Create logos, videos, banners, mockups with A.I. in 2 minutes</h1>
          <p className='text-center lg:text-left text-xl lg:text-2xl my-4 w-full'>Designs.ai helps you save time, cut costs, and simplify your workflow.</p>
          <div className='my-8 text-center lg:text-start w-full'>
            <Link className='px-5 py-3 bg-[#6695FF] text-white font-medium rounded-[6px]'>sign up for free </Link>
          </div>
         </div>
         </div>
         <div className='w-full lg:w-[60%] flex flex-row justify-center items-center'>
         <video className= ' w-[350px] h-[200px] sm:w-[600px] sm:h-[350px] sm:p-0 p-2' autoPlay muted controls>
          <source src={homeVideo} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
         </div>
     </div>

     {/* ------------------ fourth phase ----------------------- */}
     <div className='bg-[#F8F6FF] py-10 min-h-screen  w- flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions (FAQs)</h1>
      <FaqSection/>
      <div className='flex justify-center items-center'>
      <Link className='text-[#824179] hover:border-b-[1px] border-[#824179]  text-center'>Click here for individual product FAQs</Link>
     </div>
     </div>

 {/* ------------------ footer section ----------------------- */}

</>

  )
}

export default CompanyPage
