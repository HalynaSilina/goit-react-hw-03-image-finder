import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

class ImageGallery extends Component {

componentDidMount() {
  window.addEventListener('click', this.handleClick)
}

componentWillUnmount() {
  window.removeEventListener('click', this.handleClick)
}

handleClick= evt=> {
  evt.preventDefault();
  console.log(evt.currentTarget)
}

  render() {
    const images = this.props.images;
    return (
      <ul className={css.gallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            image={image.webformatURL}
            tags={image.tags}
            largeImage={image.largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
