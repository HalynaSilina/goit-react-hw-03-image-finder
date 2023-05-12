import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul>
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
