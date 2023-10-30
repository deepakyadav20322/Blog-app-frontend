import React, { useState, useRef,useContext, useMemo, useEffect } from "react";
import { Authcontext } from "../context/UserContext";
import axios from "axios";
import JoditEditor from 'jodit-react';
import calculateReadingTime from "../helper/ReadTime";
import { baseURL } from "../config";
import {toast,Toaster} from 'react-hot-toast'

const categories = ["Technology", "Travel", "Food", "Fashion", "Health", "Lifestyle"];
import Confetti from 'react-dom-confetti';

const CreatePost = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { setLoginUser } = useContext(Authcontext);
  const initialValue = { title: "", content: "", description: "", tags:[],author:"",mainImage:null,readTime:"",category:"" };
  const [formData, setFormData] = useState(initialValue);
  const [selectedTags, setSelectedTags] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  
  const confettiConfig = {
    angle: 45,
    spread: 230,
    startVelocity: 40,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 4000,
    stagger: 3,
    width: '10px',
    height: '10px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a']
  };

  const token = JSON.parse(localStorage.getItem('blogAuth')).token
  // const baseURL = 'http://localhost:3001';
  
  const editor = useRef(null);

  const handleConfettiShow = () => {
    setShowConfetti(true); // Set showConfetti to true when you want to show confetti
    setTimeout(()=>{
      setShowConfetti(false)
    },2000)
  
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
         if(selectedTags.length!==4){
          alert("Must add four tags...");
          return;
         }else if(formData.category==""){
          alert("Please select one category");
          return;
         }else if(formData.mainImage==null){
          alert("Please select front image");
          return;
         }
         formData.readTime= calculateReadingTime(formData?.content)
        formData.tags = selectedTags
        formData.author = JSON.parse(localStorage.getItem('blogUser')).user._id ;
    console.log(formData)
    console.log("write api call?")
   
    try {

      const response = await axios.post(`${baseURL}/post/createPost`, formData, {
        headers: {
          'Authorization': `Bearer ${token}` ,
          'Content-Type': 'multipart/form-data',
        }
      });
      if(response.status===200){
        const data = response.data;
        console.log('save posts=>',data);
        handleConfettiShow()
        toast.success("Post created successfully");
      }
      setFormData(initialValue);
      setSelectedTags([]);
    } catch (error) {
      toast.error("Error to create the new posts");
      console.log("Error to create the new posts",error)
    }

  };

  
  const availableTags = [
    "React",
    "NodeJs",
    "Programming",
    "Entertainment",
    "Game",
    "HTML",
    "CSS",
    "Javascipt",
    "War",
    "Computer",
    "AI",
    "ML",
    "Finance",
    "Healthcare",
    "Education",
    "Exercise",
    "Climate",
    "Mobile",
  ];

  const handleTagChange = (e) => {
    const selectedTag = e.target.value;
    if (e.target.checked) {
      // Add the selected tag to the array if it's not already present
      if (selectedTags.length < 4 && !selectedTags.includes(selectedTag)) {
        setSelectedTags([...selectedTags, selectedTag]);
      }
    } else {
      // Remove the selected tag from the array
      const updatedTags = selectedTags.filter((tag) => tag !== selectedTag);
      setSelectedTags(updatedTags);
    }
  
  };


      useEffect(()=>{

  const fetchCategory = async()=>{
  try {
    const res = await axios.get(`${baseURL}/admin/getCategories`);
    if(res.status===200){
      setAllCategory(res.data.data);
    }
    
  } catch (error) {
    console.log(error);
  }
}
   fetchCategory()
      },[]);



  return (
    <div className="max-w-5xl   px-2 m-auto py-10">
       <Confetti active={showConfetti} config={confettiConfig}/>
      <div className="text-center text-primary mb-2 ">
        {" "}
        <span className="border-b-2 border-black px-4 pb-2">
          Create Your New Post{" "}
       
          
        </span>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-cenetr items-start">
            <label htmlFor="title" className="text-2xl font-bold mt-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              name="title"
              id="title"
              className="outline-none border-2 border-gray-300 rounded w-full  "
              placeholder="Short range title"
            />
          </div>

          <div className="flex flex-col justify-cenetr items-start">
            <label htmlFor="title" className="text-xl font-medium mt-3">
              Front Image
            </label>
            <input
              type="file"
              onChange={(e) =>{ setFormData({ ...formData, mainImage: e.target.files[0] });console.log(e.target.files[0] )}}
              name="mainImage"
              id="mainImage"
              className="outline-none border-2 border-gray-300 rounded w-full p-3  "
              placeholder="Short range title"
            />
          </div>

          <div className="select-category border-2 border-gray-300 py-1 px-2 mt-6 mb-1">
            <div className="flex flex-row justify-between items-center">
            <label htmlFor="category">Select Category</label>
            <select id="category" value={formData.category} onChange={(e)=>setFormData({...formData,category:e.target.value})}>
                <option value="">Select category</option>
                {allCategory?.map(category => (
                    <option key={category._id} value={category.categoryName}>{category.categoryName}</option>
                ))}
            </select>
            </div>

            {/* <h2>Selected Categories:</h2>
            <ul>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ul> */}
        </div>


          <div className="flex flex-col justify-cenetr items-start my-4">
            <label
              htmlFor="discription"
              className="text-2xl font-medium mt-2 pl"
            >
              Discription
            </label>
            {/* <input type="text" name="discription" id="discription"  className='outline-none border-2 border-gray-300 rounded w-full mx-' /> */}
            <textarea
             value={formData.description}
             onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              name="description"
              id="description"
              cols="10"
              rows="10"
              minLength={"100"}
              maxLength={"250"}
              className="w-full h-[170px] sm:h-[100px] min-h-[100px] rounded p-2 resize-none"
              placeholder="Give short discription abour your post. Character limit gone from 100 to 250"
            ></textarea>
          </div>

          <div className="flex flex-col justify-cenetr items-start my-4 w-full w">
            <label htmlFor="content" className="text-2xl font-medium mt-2">
              Main content
            </label>

            {/* <textarea
             value={formData.content}
             onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              name="content"
              id="content"
              cols="50"
              rows="10"
              minLength={"300"}
              maxLength={"10000"}
              className="w-full min-h-[100px]"
            ></textarea> */}
          <JoditEditor
            ref={editor}
            value={formData.content} // Set the initial content value
            onChange={(newContent) => setFormData({ ...formData, content: newContent })}
            name="content"
            id="content"
            tabIndex={1}
          />

          </div>

          {/* ------------------------- Tags selection------------------------------------------- */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Select up to four tags:
            </h2>
            <div className="space-x-6 flex flex-row flex-wrap justify-start items-center">
              {availableTags.map((tag) => (
                <div key={tag} className="flex items-center my-2">
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={handleTagChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 mr-2"
                  />
                  <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    {tag}
                  </label>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <strong className="block">Selected Tags:</strong>
              <ul>
                {selectedTags.map((tag) => (
                  <li key={tag} className="ml-2">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}

          <div className="flex flex-row justify-end items-center">
            <button type="submit" className="py-2 px-4 rounded mr-3 border-2 border-primary hover:bg-primary hover:text-white ">
              Save
            </button>
            <button className="p-2 rounded border-2 border-red-400  hover:bg-red-400 hover:text-white">
              Cancel
            </button>
          </div>
        </form>
      </div>
     
      <Toaster/>
    </div>
  );
};

export default CreatePost;
