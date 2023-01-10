import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'searchParam',
  initialState: {searchParam: 'r/all.json', searchTerm: ''},
  reducers: {
    updateSearchParam: (state, action) => { state.searchParam = action.payload },
  }
}
const searchSlice = createSlice(options);

export const { updateSearchParam, updateSearchTerm } = searchSlice.actions;
export const selectSearchParam = (state) => state.searchParam.searchParam;

export default searchSlice.reducer;

