import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags }) => {
  return (
    <li className={css.item}>
      <img src={image} alt={tags} className={css.image}/>
    </li>
  );
};

export default ImageGalleryItem;
