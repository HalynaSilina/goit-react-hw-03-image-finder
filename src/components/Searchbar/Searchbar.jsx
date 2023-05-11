import { Component } from 'react';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleSearchChange = evt => {
    const searchValue = evt.currentTarget.value.toLowerCase();
    this.setState({ searchValue });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.searchValue.trim() === '') return;
    const { searchValue } = this.state;
    this.props.onSubmit(searchValue);
    this.setState({searchValue: ''})
  };

  render() {
    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit}>
            <button type="submit">
              <span>Search</span>
            </button>
            <input
              type="text"
              value={this.state.searchValue}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleSearchChange}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
