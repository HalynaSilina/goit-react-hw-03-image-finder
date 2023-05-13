import React from 'react';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, largeImage }) => {
  return (
    <li className={css.item}>
      <a href={largeImage}>
        <img src={image} alt={tags} className={css.image} />
      </a>
    </li>
  );
};

export default ImageGalleryItem;
