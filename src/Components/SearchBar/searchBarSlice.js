import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'searchTerm',
  initialState: 'Meditation',
  reducers: {
    updateSearchTerm: (state, action) => state.searchTerm = action.payload
  }
}
const searchTermSlice = createSlice(options);

export const { updateSearchTerm } = searchTermSlice.actions;
export const { searchTermReducer } = searchTermSlice.reducer;



