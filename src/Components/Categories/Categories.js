import React from 'react';
import { useDispatch } from 'react-redux';
import './Categories.css';
import { updateSearchTerm } from '../SearchBar/searchBarSlice';

export const Categories = () => {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(updateSearchTerm(event.target.innerHTML));
  }
    return (
      <div className="Categories" >
        <h2>Categories</h2>
        <br />
        <ul>
          <li value="meditation" key="meditation" onClick={handleClick}>Meditation</li>
          <li value="hiking" key="hiking" onClick={handleClick}>Hiking</li>
          <li value="healthy recipes" key="healthy recipes" onClick={handleClick}>Healthy Recipes</li>
          <li value="backpacking" key="backpacking" onClick={handleClick}>Backpacking</li>
        </ul>
      </div>
    )
  }