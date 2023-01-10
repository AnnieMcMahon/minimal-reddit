import React from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import { SearchResults } from '../Components/SearchResults/SearchResults';
import { Categories } from '../Components/Categories/Categories';
function App() {
  return (
    <div>
      <div className="App">
        <SearchBar />
        <div className="App-boxes">
          <SearchResults />
          <Categories />
        </div>
      </div>
    </div>
  )
}
export default App;
