import { Component } from 'react';
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
    showModal: false,
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

  handleOpenModal = image => {
    const largeImage = { url: image.largeImageURL, alt: image.tags };
    this.setState({ largeImage, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { images, loading, error, showModal } = this.state;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error !== '' && <p>{error.message}</p>}
        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.handleOpenModal} />
        )}
                {loading && <Loader />}
        {images.length !== 0 && <Button onClick={this.handleLoadMoreClick} />}
        {showModal && (
          <Modal
            image={this.state.largeImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
