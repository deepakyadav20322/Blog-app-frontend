import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Authcontext } from '../context/UserContext'
import axios from 'axios'
import { baseURL } from '../config'

const CategoryTabs = ({setActiveCategory,setSearchQuery, setSearchbtnClick,searchbtnClick,activeCategory}) => {

    const {pathname} =  useLocation()
    const [allAategory,setAllCategory]  = useState([]);

    useEffect(()=>{
       const fetchCategory = async()=>{
 
        
      const res = await axios.get(`${baseURL}/admin/getCategories`,{
        headers:{
          'Content-Type':'application/json',
        }
      });
  
         if(res.status===200){
            console.log('all category fetched admin', res.data.data);
            setAllCategory(res.data.data);
         }

       }
       fetchCategory()
    },[])

  return (
    <div className=''>
    <div className='mx-6 m-auto mb-1 mt-4 flex items-center justify-between border-b-2 '>
        <ul className='flex items-center'>
            <li className={`mr-6 pb-3 border-b-4 rounded-sm ${activeCategory==''?'border-primary text-primary': 'border-white text-gray-400'}`}><span onClick={()=>setActiveCategory("")} className='cursor-pointer'>All Posts</span></li>
           { allAategory.map((cat)=>(
            <li  className={`mr-6 pb-3 border-b-4 rounded-sm ${activeCategory==cat?.categoryName ?'border-primary text-primary': 'border-white text-gray-500  transition-all duration-150'} `}><span onClick={(e)=>cat && setActiveCategory(e.target.textContent)} className='cursor-pointer'>{cat?.categoryName}</span></li>
            
            ))}
        </ul>
        <div className="flex items-center w-[400px]  border-[1px]  border-[#4e92f8e4] rounded-sm mb-1 ">
                <input
                    onChange={(e) => setSearchQuery(e.target.value)}
                    
                    type="text"
                    placeholder="Search"
                    className="border-0 rounded-md py-2 px-4 w-[90%]  focus:ring-0"
                />
                <svg
                    className="h-10 fill-gray-500  hover:bg-[#3B49DF1A]  p-3 m-[2px] rounded cursor-pointer"
                    onClick={()=>setSearchbtnClick(!searchbtnClick)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
                </svg>
               
            </div>
    </div>
    </div>
  )
}

export default CategoryTabs


// const isActiveLink = (category: ICategory) => {
//     return category.attributes.Slug === router.query.category;
// };

// when the category data come from backend then you use............
// {categories.map((category) => {
//     return (
//         <li
//             key={category.id}
//             className={
//                 'mr-6 pb-6 border-b-4 rounded-sm ' +
//                 `${
//                     isActiveLink(category)
//                         ? 'border-primary text-primary'
//                         : 'border-white text-gray-400'
//                 }`
//             }>
//             <Link
//                 href={`/category/${category.attributes.Slug}`}>
//                 {category.attributes.Title}
//             </Link>
//         </li>
//     );
// })}