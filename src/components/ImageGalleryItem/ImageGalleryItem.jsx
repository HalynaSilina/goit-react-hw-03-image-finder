import React from 'react';

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
