// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// import { fetchPostById,createPost } from './postAPI';


// const initialState = {
//   posts: [],
//   selectedPost: null,
//   status: 'idle',
//   error:null
// };

// export const fetchPostByIdAsync = createAsyncThunk(
//   'post/fetchProductById',
//   async (id) => {
  
//     const response = await fetchPostById(id);
//     // The value we return becomes the `fulfilled` action payload
//     return response.data;

//   }
// );

// export const createPostAsync = createAsyncThunk(
//   'post/create',
//   async (postData) => {
//     console.log("header post")
//     const response = await createPost(postData);
//     return response.data;
//   }
// );


// export const postSlice = createSlice({
//   name: 'post',
//   initialState,

//   reducers: {
   
//   },
 
//   extraReducers: (builder) => {
//     builder
//     .addCase(createPostAsync.pending, (state) => {
//       state.status = 'loading';
//     })
//     .addCase(createPostAsync.fulfilled, (state, action) => {
//       state.status = 'idle';
//       state.posts.push(action.payload);
//     })
//     .addCase(fetchPostByIdAsync.pending, (state) => {
//       state.status = 'loading';
//     })
//     .addCase(fetchPostByIdAsync.fulfilled, (state, action) => {
//       state.status = 'idle';
//       state.selectedPost = action.payload;
//     })
//     .addCase(fetchPostByIdAsync.rejected, (state, action) => {
//       state.status = 'idle';
//       state.error = action.payload;
//     })
//   },
// });

// // export const { increment} = counterSlice.actions;

// export const selectPostById = (state) => state.post.selectedPost;

// export default postSlice.reducer;
