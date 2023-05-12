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

  componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    if (prevState.searchValue !== searchValue || prevState.page !== page) {
      this.setState({ loading: true });
      fetchImages(searchValue, page)
        .then(data => {
          const searchedImages = data.hits;
          this.setState({
            images: [...prevState.images, ...searchedImages],
            loading: false,
          });
        })
        .catch(error => console.log(error));
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
    if (this.state.loading) return <Loader />;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {this.state.images.length !== 0 && (
          <>
            <ImageGallery images={this.state.images} />
            <Button onClick={this.handleLoadMoreClick} />
          </>
        )}
        {/* <Modal /> */}
      </>
    );
  }
}

export default App;
