import React, { useContext, useEffect } from 'react'
import BlogList from '../components/BlogList'
import CategoryTabs from '../components/CategoryTabs'
import { Authcontext } from '../context/UserContext'
import {toast,Toaster} from 'react-hot-toast'
import axios from 'axios'
import ScrollUpDown from '../components/ScrollUpDown'


const Home = () => {

  const {allPosts,setAllPosts} = useContext(Authcontext);
const baseURL = 'http://localhost:3001'
useEffect(()=>{
  console.log("home render")
   const fetchAllPosts=async ()=>{
   try {

    const res = await axios.get(`${baseURL}/post/getAllPosts`)
     
       if(res.status===200){
        console.log(res.data.data);
        setAllPosts(res.data.data);
       }
    
   } catch (error) {
    console.log('Error while fetchig all posts',error)
    toast.error('Error while fetchig all posts');
   }
  }
  fetchAllPosts();
},[])

  return (
    <>
    <div> 
      <CategoryTabs/>
     
    <BlogList/>
    </div>
    <Toaster/>
    <ScrollUpDown/>
    </>
  )
}

export default Home