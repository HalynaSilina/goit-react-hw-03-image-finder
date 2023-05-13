import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, tags, onClick }) => {
  return (
    <li className={css.item} onClick={onClick}>
      <img src={image} alt={tags} className={css.image} />
    </li>
  );
};

ImageGalleryItem.propTypes={
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ImageGalleryItem;
