import React from 'react';
import './Categories.css';
export class Categories extends React.Component {
  render() {
    return (
      <div className="Categories">
        <h2>Categories</h2>
        <br />
        <ul>
          {
            this.props.categories.map(item => 
            <li>{item.category}</li>
            )
          }
        </ul>
      </div>
    )
  }
};
