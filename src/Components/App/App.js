import React from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Categories } from '../Categories/Categories';
import { getPosts, getPostComments } from '../../util/Reddit';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { title: 'title1', content: 'content1', comments: 'comments1', id: 1 },
        { title: 'title2', content: 'content2', comments: 'comments2', id: 2 },
        { title: 'title3', content: 'content3', comments: 'comments3', id: 3 }
      ],
      categories: [
        { category: 'Meditation', site: 'https://www.reddit.com/r/Meditation.json' },
        { category: 'Hiking', site: 'https://www.reddit.com/r/hiking.json' },
        { category: 'Healthy Recipes', site: 'https://www.reddit.com/r/HealthyRecipes.json' },
        { category: 'Backpacking', site: 'https://www.reddit.com/r/backpacking.json' }
      ]
    }
    this.search = this.search.bind(this);
  }
  search(searchTerm) {
    console.log(searchTerm);
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
            <Categories categories={this.state.categories} />
          </div>
        </div>
      </div>
    )
  }
};
export default App;
