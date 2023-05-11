import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
  };

  handleFormSubmit = searchValue => {
    this.setState({ searchValue,
    page: 1 });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.searchValue !== '' && (
          <>
            <ImageGallery
              searchValue={this.state.searchValue}
              page={this.state.page}
            />
            <Button onClick={this.handleLoadMoreClick} />
          </>
        )}
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
