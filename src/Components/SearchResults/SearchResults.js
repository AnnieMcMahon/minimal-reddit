import React from 'react';
import './SearchResults.css';
import { PostList } from '../PostList/PostList.js';
export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <PostList posts={this.props.searchResults}/>
            </div>
        )
    }
};
