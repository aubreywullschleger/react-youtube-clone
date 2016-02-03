import React, { Component } from 'react';

// two types of components, 'functional' like this (for returning just jsx)
// one and 'class'-based component that can store data (keeps track of state)

//functional component below --
// const SearchBar = () => {
//   return (
//     <input />
//   );
// }

// class based component below --
// define a class called 'SearchBar' that extends
// React.Component from line 1
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  render() {
    return (
      <div>
        <input
        value={this.state.searchTerm}
        onChange={event => this.setState({ searchTerm: event.target.value })}/>
        <p>value of input: {this.state.searchTerm}</p>
      </div>
      );
  }
}

export default SearchBar;
