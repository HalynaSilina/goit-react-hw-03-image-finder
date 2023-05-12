import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleSearchChange = evt => {
    const value = evt.currentTarget.value.toLowerCase();
    this.setState({ value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.value.trim() === '') return;
    const { value } = this.state;
    this.props.onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <>
        <header>
          <form onSubmit={this.handleSubmit} className={css.searchbar}>
            <button type="submit" className={css.button}>
              <span>Search</span>
            </button>
            <input
              type="text"
              value={this.state.value}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleSearchChange}
              className={css.input}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
