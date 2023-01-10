import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (searchParam) => {
  const url = 'https://www.reddit.com/';
  const response = await fetch(`${url}${searchParam}`);
  const json = await response.json();
  const data =  json.data.children.map(post => post.data)
  return data
});

const options = {
  name: 'posts',
  initialState: {
    posts: [],
    isLoading: false,
    hasError: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPosts.fulfilled, (state,action) => {
        state.isLoading = false;
        state.hasError = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
    }
};

const postSlice = createSlice(options);

export const selectPosts = (state) => state.posts.posts;
// export const selectIsLoading = (state) => state.posts.isLoading
// export const selectHasError = (state) => state.posts.hasError

export default postSlice.reducer