import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleClick);
  }

  handleClick = evt => {
    if (evt.code === 'Escape') this.props.onClose();
  };

  onBackdropClickClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { url, alt } = this.props.image;
    return (
      <div className={css.overlay} onClick={this.onBackdropClickClose}>
        <div className={css.modal}>
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
