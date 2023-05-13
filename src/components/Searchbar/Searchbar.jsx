import { Component } from 'react';
import { CgSearch } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
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
            <IconContext.Provider value={{ color: 'blue', size: '2em', style: { verticalAlign: 'middle' } }}>
              <button type="submit" className={css.button}>
                <CgSearch />
                <span className={css.buttonLabel}>Search</span>
              </button>
            </IconContext.Provider>
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
