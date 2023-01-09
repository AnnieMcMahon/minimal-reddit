import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SearchResults.css';
import { PostList } from '../PostList/PostList.js';
import { updateSearchResults, selectPosts, selectSearchTerm } from './searchResultsSlice';
import { search } from '../../util/api';

export const SearchResults = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  search(searchTerm).then(posts => {
    dispatch(updateSearchResults(posts));
  })
  const searchResults = useSelector(selectPosts);
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <PostList posts={searchResults} />
    </div>
  )
}
