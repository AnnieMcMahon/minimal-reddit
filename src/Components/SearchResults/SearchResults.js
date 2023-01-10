import React from 'react';
import './SearchResults.css';
import { PostList } from '../../Features/PostList/PostList';

export const SearchResults = () => {
  return (
    <div className="SearchResults">
      <PostList />
    </div>
  )
}
