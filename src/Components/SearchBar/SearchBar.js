import React from 'react';
import './SearchBar.css';
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  handleTermChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }
  search() {
    this.props.onSearch(this.state.searchTerm)
  }
  render() {
    return (
        <div className="SearchBar">
        <input placeholder="Enter a category" onChange={this.handleTermChange}/>
        <button className="SearchButton">SEARCH</button>
      </div>
    )
  }
};
