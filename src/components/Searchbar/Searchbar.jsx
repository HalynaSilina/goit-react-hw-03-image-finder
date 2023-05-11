import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleSearchChange = evt => {
    const searchValue = evt.currentTarget.value.trim().toLowerCase();
    this.setState({ searchValue });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { searchValue } = this.state;
    this.props.onSubmit(searchValue);
  };

  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>
          <input
            class="input"
            type="text"
            value={this.state.searchValue}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleSearchChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
