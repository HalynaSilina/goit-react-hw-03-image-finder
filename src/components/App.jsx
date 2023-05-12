import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../api/ApiService';
import Loader from 'components/Loader/Loader';
// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      const { searchValue, page } = this.state;
      this.setState({ loading: true });
      try {
        await fetchImages(searchValue, page)
          .then(res => {
            if (!res.ok) {
              throw new Error('oops');
            }
            return res.json();
          })
          .then(data => {
            const searchedImages = data.hits;
            this.setState(prevState => ({
              images: [...prevState.images, ...searchedImages],
              loading: false,
            }));
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleFormSubmit = searchValue => {
    this.setState({ searchValue, page: 1 });
  };

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading } = this.state;
    if (loading) return <Loader />;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length !== 0 && (
          <>
            <ImageGallery images={images} />
            <Button onClick={this.handleLoadMoreClick} />
          </>
        )}
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
