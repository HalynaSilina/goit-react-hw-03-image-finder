import { Component } from 'react';
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
  render() {
    const { url, alt } = this.props.image;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
