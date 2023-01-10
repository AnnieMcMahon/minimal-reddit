import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../Features/PostList/postSlice';
import searchReducer from '../Features/Search/searchSlice';
import categoryReducer from '../Features/Category/categorySlice';

export default configureStore({
  reducer: {
    searchParam: searchReducer,
    posts: postReducer,
    categories: categoryReducer
  }
})