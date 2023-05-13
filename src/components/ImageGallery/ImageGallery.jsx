import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {
  onItemClick = image => {
    this.props.onClick(image);
  };

  render() {
    const images = this.props.images;
    return (
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            onClick={() => this.onItemClick(image)}
            key={image.id}
            image={image.webformatURL}
            tags={image.tags}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGallery;
