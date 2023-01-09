import { configureStore } from '@reduxjs/toolkit'
import { searchResultsReducer } from '../Components/SearchResults/searchResultsSlice';
import { searchTermReducer } from '../Components/SearchBar/searchBarSlice';

export default configureStore({
  reducer: {
    searchTerm: searchTermReducer,
    searchResults: searchResultsReducer
  }
})