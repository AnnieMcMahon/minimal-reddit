import React from 'react';
import './App.css';
import { SearchBar } from '../Components/SearchBar/SearchBar';
import { SearchResults } from '../Components/SearchResults/SearchResults';
import { Categories } from '../Components/Categories/Categories';
import { Reddit, getPosts, getPostComments } from '../util/Reddit';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { title: 'title1' },
        { title: 'title2' },
        { title: 'title3' }
      ],
    }
    this.search = this.search.bind(this);
  }

  search(searchTerm) {
    Reddit.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  displayPosts(category) {
    getPosts(category);
  }

  displayComments(id) {
    getPostComments(id);
  }
   
  render() {
    return (
      <div>
        <h1>Minimal Reddit</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-boxes">
            <SearchResults searchResults={this.state.searchResults} />
            <Categories />
          </div>
        </div>
      </div>
    )
  }
};
export default App;
