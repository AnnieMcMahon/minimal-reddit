import React from 'react';
import './Categories.css';
import { Category } from '../../Features/Category/Category';

export const Categories = () => {
    return (
      <div className="Categories" >
        <h2>Subreddits</h2>
        <br />
        <Category />
      </div>
    )
  }