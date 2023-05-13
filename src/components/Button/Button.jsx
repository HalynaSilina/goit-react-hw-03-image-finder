import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={css.button}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
