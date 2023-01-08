import React from 'react';
import './Categories.css';

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchTerm: 'Meditation'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({searchTerm: event.target.innerHTML});
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="Categories" >
        <h2>Categories</h2>
        <br />
        <ul>
          <li value="meditation" key="meditation" onClick={this.handleClick}>Meditation</li>
          <li value="hiking" key="hiking" onClick={this.handleClick}>Hiking</li>
          <li value="healthy recipes" key="healthy recipes" onClick={this.handleClick}>Healthy Recipes</li>
          <li value="backpacking" key="backpacking" onClick={this.handleClick}>Backpacking</li>
        </ul>
      </div>
    )
  }
}