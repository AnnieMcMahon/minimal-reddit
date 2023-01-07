import React from 'react';
import './Categories.css';

// const initialState = [
//   { category: 'Meditation', site: 'https://www.reddit.com/r/Meditation.json' },
//   { category: 'Hiking', site: 'https://www.reddit.com/r/hiking.json' },
//   { category: 'Healthy Recipes', site: 'https://www.reddit.com/r/HealthyRecipes.json' },
//   { category: 'Backpacking', site: 'https://www.reddit.com/r/backpacking.json' }
// ];
export class Categories extends React.Component {
  render() {
  return(
    <div className="Categories" >
      <h2>Categories</h2>
      <br />
      <ul>
        <li className="meditation">Meditation</li>
        <li className="hiking">Hiking</li>
        <li className="recipes">Healthy Recipes</li>
        <li className="backpacking">Backpacking</li>
      </ul>
    </div>
  )}
}