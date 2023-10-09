
import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../config';

const CreateCategory = () => {


    const adminToken = localStorage.getItem("adminBlogAuth");

    const [category, setCategory] = useState({
        categoryName: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCategory({
            ...category,
            [name]: value
        });
    };

    const handleSubmit = async(e) => {
        console.log(category);
        e.preventDefault();
       try {
        const res = await axios.post(`${baseURL}/admin/createCategory`,category,{
            headers:{
                Authorization:`Bearer ${adminToken}`
            }
        });
        if(res.status==200){
            console.log('category create successfull',res.data.data);
        }
       } catch (error) {
        console.log(error);
       }
    };

    return (

        <div className="flex flex-col md:flex-row justify-center my-12">
            {/* Left Side: Create Category Form */}
            <div className="max-w-md w-full  p-6 bg-white rounded shadow border-[1px] border-gray-500">
            <h2 className="text-2xl font-semibold mb-4">Create Category</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Category Name
                    </label>
                    <input
                        className="w-full p-2 border rounded"
                        type="text"
                        id="categoryName"
                        name="categoryName"
                        value={category.categoryName}
                        onChange={handleChange}
                        placeholder="Enter category name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="w-full p-2 border rounded"
                        id="description"
                        name="description"
                        value={category.description}
                        onChange={handleChange}
                        placeholder="Enter category description"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create Category
                </button>
                </form>
            </div>

            {/* Right Side: Existing Categories */}
            <div className=" p-4 max-w-md w-full shadow border-[1px] border-gray-500">
                <h2 className="text-2xl font-semibold mb-4">Existing Categories</h2>
                <div className="border p-4 rounded shadow min-h-[250px] ">
                    {/* Display existing categories here */}
                    <ul className=''>
                        <li>jshdjshdj</li>
                        <li>jshdjshdj</li>
                        <li>jshdjshdj</li>
                        <li>jshdjshdj</li>
                    </ul>
                </div>
            </div>
        </div>






        // <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
        //     <h2 className="text-2xl font-semibold mb-4">Create Category</h2>
        //     <form onSubmit={handleSubmit}>
        //         <div className="mb-4">
        //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        //                 Category Name
        //             </label>
        //             <input
        //                 className="w-full p-2 border rounded"
        //                 type="text"
        //                 id="name"
        //                 name="name"
        //                 value={category.name}
        //                 onChange={handleChange}
        //                 placeholder="Enter category name"
        //                 required
        //             />
        //         </div>
        //         <div className="mb-4">
        //             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
        //                 Description
        //             </label>
        //             <textarea
        //                 className="w-full p-2 border rounded"
        //                 id="description"
        //                 name="description"
        //                 value={category.description}
        //                 onChange={handleChange}
        //                 placeholder="Enter category description"
        //                 required
        //             />
        //         </div>
        //         <button
        //             type="submit"
        //             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        //         >
        //             Create Category
        //         </button>
        //     </form>
        // </div>
    );
};

export default CreateCategory
