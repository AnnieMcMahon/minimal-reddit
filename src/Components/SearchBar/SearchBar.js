import React from 'react';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { updateSearchTerm } from './searchBarSlice';
export const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="SearchBar">
      <input placeholder="Enter a category" onClick={ (event) => 
      dispatch(updateSearchTerm(event.target.value)) } />
    </div>
  )
};
