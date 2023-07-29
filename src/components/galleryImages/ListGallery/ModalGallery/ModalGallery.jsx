import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ModalGallery.module.css';
export default class ModalGallery extends Component {
  static propTypes = { img: PropTypes.object, handleOpenModal: PropTypes.func };
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleOpenModal);
  }
  render() {
    const { img, handleOpenModal } = this.props;
    return (
      <div
        className={css.Overlay}
        onClick={handleOpenModal}
        onKeyDown={handleOpenModal}
      >
        <div className={css.Modal}>
          <img src={img.largeImageURL} alt={img.id}/>
        </div>
      </div>
    );
  }
}
