import React from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import { SearchResults } from '../Components/SearchResults/SearchResults';
import { Categories } from '../Components/Categories/Categories';
import { Reddit } from '../util/Reddit';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{title: '', id: ' '}]
    }
    this.search = this.search.bind(this);
  }

  search(searchTerm) {
    Reddit.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }
   
  render() {
    return (
      <div>
        <h1>Minimal Reddit</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-boxes">
            <SearchResults searchResults={this.state.searchResults} />
            <Categories onSearch={this.search} />
          </div>
        </div>
      </div>
    )
  }
};
export default App;
