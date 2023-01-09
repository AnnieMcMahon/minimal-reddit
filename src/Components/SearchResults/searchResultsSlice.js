import { createSlice } from '@reduxjs/toolkit';
const options = {
  name: 'searchResults',
  initialState: {searchResults: [{ title: '', id: ' ' }]},
  reducers: {
    updateSearchResults: (state, action) => state.searchResults = action.payload
  }
}
const searchResultsSlice = createSlice(options);

export const { updateSearchResults } = searchResultsSlice.actions;
export const { searchResultsReducer } = searchResultsSlice.reducer;

export const selectPosts = (state) => state.searchResults;

export const selectSearchTerm = (state) => state.searchTerm;