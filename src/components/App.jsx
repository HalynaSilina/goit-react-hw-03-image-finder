import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchValue: '',
  };

  handleSubmit = value => {
    this.setState({ searchValue: value });
  };

  // handleLoadMoreClick = () => {};

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {/* <ImageGallery /> */}
        {/* <Button onClick={this.handleLoadMoreClick} /> */}
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
