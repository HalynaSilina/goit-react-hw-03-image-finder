import React from 'react';

const ImageGalleryItem = ({ images }) => {
  return images.map(({ id, webformatURL, tags }) => {
    return (
      <li key={id}>
        <img src={webformatURL} alt={tags} />
      </li>
    );
  });
};

export default ImageGalleryItem;
