import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../api/ApiService';
import Loader from 'components/Loader/Loader';
import Modal from './Modal/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';

class App extends Component {
  state = {
    searchValue: '',
    page: 1,
    images: [],
    loading: false,
    largeImage: {},
    showModal: false,
    isActive: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      const { searchValue, page, images } = this.state;
      this.setState({ loading: true });
      try {
        await fetchImages(searchValue, page).then(data => {
          if (data.hits.length === 0) {
            this.setState({ loading: false, isActive: false });
            return toast.error(`Nothing found for ${searchValue}`, {
              position: 'top-center',
              autoClose: 2000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              theme: 'colored',
            });
          }
          if (images.length + 12 <= data.totalHits) {
            this.setState({ isActive: true });
          } else {
            this.setState({ isActive: false });
          }
          const searchedImages = data.hits;
          this.setState(prevState => ({
            images: [...prevState.images, ...searchedImages],
            loading: false,
          }));
        });
      } catch (error) {
        this.setState({ loading: false });
        toast.error(`${error.message}`, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
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
    const { images, loading, showModal, isActive } = this.state;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length !== 0 && (
          <ImageGallery images={images} onClick={this.handleOpenModal} />
        )}
        {loading && <Loader />}
        {isActive && <Button onClick={this.handleLoadMoreClick} />}
        {showModal && (
          <Modal
            image={this.state.largeImage}
            onClose={this.handleCloseModal}
          />
        )}
        <ToastContainer />
      </div>
    );
  }
}

export default App;
