import React from 'react';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      Load More
    </button>
  );
};

export default Button;
