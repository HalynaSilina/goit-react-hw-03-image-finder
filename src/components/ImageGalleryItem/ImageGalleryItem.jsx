import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, onClick }) => {
  return (
    <li className={css.item} onClick={onClick}>
      <img src={image} alt={tags} className={css.image} />
    </li>
  );
};

export default ImageGalleryItem;
