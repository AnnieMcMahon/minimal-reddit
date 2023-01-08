import React, { useState } from 'react';
import './Categories.css';

export function Categories(props) {
  const [searchTerm, setSearchTerm] = useState('Meditation');

  const handleClick = (event) => {
    setSearchTerm(event.target.innerHTML);
    props.onSearch(searchTerm);
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