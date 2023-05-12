import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id}
          image={image.webformatURL}
          tags={image.tags}
          index={index}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
