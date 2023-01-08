import React, { useState } from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import { SearchResults } from '../Components/SearchResults/SearchResults';
import { Categories } from '../Components/Categories/Categories';
function App() {
  const [searchResults, setSearchResults] = useState([{ title: '', id: ' ' }]);

  const search = (searchTerm) => {
    return fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
      .then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (!jsonResponse.data) {
          return [];
        }
        return jsonResponse.data.children.map(post => ({
          id: post.data.id,
          title: post.data.title,
          url: post.data.url,
          media: post.data.media
        }))
      }).then(searchResults => {
        setSearchResults(searchResults)
      })
  }
  return (
    <div>
      <h1>Minimal Reddit</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-boxes">
          <SearchResults searchResults={searchResults} />
          <Categories onSearch={search} />
        </div>
      </div>
    </div>
  )
}
export default App;
