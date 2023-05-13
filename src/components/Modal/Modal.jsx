import React from 'react';

const Modal = ({ image: { url, alt } }) => {
  return (
    <div>
      <div>
        <img src={url} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
