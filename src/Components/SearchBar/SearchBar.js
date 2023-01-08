import React, { useState } from 'react';
import './SearchBar.css';
export function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('Meditation');
  const handleTermChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const search = () => {
    props.onSearch(searchTerm)
  }
  return (
    <div className="SearchBar">
      <input placeholder="Enter a category" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  )
};
