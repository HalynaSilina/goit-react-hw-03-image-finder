import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
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

export default ImageGallery;
