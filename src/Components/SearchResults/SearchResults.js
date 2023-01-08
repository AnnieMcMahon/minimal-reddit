import React from 'react';
import './SearchResults.css';
import { PostList } from '../PostList/PostList.js';
export function SearchResults(props) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <PostList posts={props.searchResults} />
    </div>
  )
}
