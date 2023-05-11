import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import fetchImages from 'ApiService';
import Loader from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    loading: false,
  };

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      await fetchImages(this.props.searchValue, this.props.page)
        .then(res => res.json())
        .then(data => {
          const searchedImages = data.hits;
          this.setState({
            images: [...searchedImages],
          });
        });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchValue !== this.props.searchValue) {
      try {
        this.setState({ loading: true });
        fetchImages(this.props.searchValue, this.props.page)
          .then(res => res.json())
          .then(data => {
            const searchedImages = data.hits;
            this.setState({
              images: [...searchedImages],
            });
          });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    } else if (
      prevProps.searchValue === this.props.searchValue &&
      prevProps.page !== this.props.page
    ) {
      try {
        this.setState({ loading: true });
        fetchImages(this.props.searchValue, this.props.page)
          .then(res => res.json())
          .then(data => {
            const searchedImages = data.hits;
            this.setState(prevState => ({
              images: [...prevState.images, ...searchedImages],
            }));
          });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    if (this.state.loading) return <Loader />;
    else
      return (
        <ul>
          <ImageGalleryItem images={this.state.images} />
        </ul>
      );
  }
}

export default ImageGallery;
