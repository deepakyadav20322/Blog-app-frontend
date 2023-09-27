// // A mock function to mimic making an async request for data

// // const baseURL = 'https://jsonplaceholder.typicode.com'
// const baseURLS = 'http://localhost:3001'
// import { isRejectedWithValue } from '@reduxjs/toolkit';
// import axios from 'axios';
 

// const {token} = JSON.parse(localStorage.getItem('blogAuth'));
// console.log(token)


// export function fetchPostById(id) {
//   return new Promise(async (resolve) => {
//     console.log(id,"idididididi")
//     const response = await axios.get(`${baseURLS}/post/getSinglePost/${id}`);
//     const data = response.data;
//     resolve({ data });
//   });
// }

// export function createPost(postData) {
 
//   return new Promise(async (resolve) => {
   
//     const response = await axios.post(`${baseURLS}/post/createPost`, postData, {
//       headers: {
//         'Authorization': `Bearer ${token}` ,
//         'Content-Type': 'application/json',
//       }
//     });
//     const data = response.data;
//     console.log('save posts=>',data);
//     resolve({ data });
//   });
 
// }



