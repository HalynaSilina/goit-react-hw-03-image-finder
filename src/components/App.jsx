import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../api/ApiService';
import Loader from 'components/Loader/Loader';
import css from './App.module.css';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    loading: false,
    error: '',
    largeImage: {},
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      const { searchValue, page } = this.state;
      this.setState({ loading: true });
      try {
        await fetchImages(searchValue, page).then(data => {
          if (data.hits.length <= 0) {
            return alert(`Nothing found for ${searchValue}`);
          }
          const searchedImages = data.hits;
          this.setState(prevState => ({
            images: [...prevState.images, ...searchedImages],
            loading: false,
          }));
        });
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue, page: 1, images: [] });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  handleOpenModal = evt => {
    evt.preventDefault();
    // const url = evt.currentTarget.elements.href;
    // const alt = evt.currentTarget.elements.alt;
    // const largeImage = { url, alt };
    console.log(evt.target);
    // this.state({ largeImage });
  };

  render() {
    const { images, loading, error } = this.state;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <Loader />}
        {error !== '' && <p>{error.message}</p>}
        {images.length !== 0 &&<ImageGallery images={images} onClick={this.handleOpenModal} />}
        {images.length !== 0 && <Button onClick={this.handleLoadMoreClick} />}
        <Modal image={this.state.largeImage} />
      </div>
    );
  }
}

export default App;
