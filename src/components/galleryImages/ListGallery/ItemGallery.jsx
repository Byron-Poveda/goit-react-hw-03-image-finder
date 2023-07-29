import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ImageGalleryContent.module.css';
import ModalGallery from './ModalGallery/ModalGallery';
export default class ItemGallery extends Component {
  static propTypes = { img: PropTypes.object };
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }
  handleOpenModal(e) {
    if (e.type === 'click') {
      return this.setState({ openModal: !this.state.openModal });
    }
    if (e.type === 'keydown' && e.code === 'Escape') {
      return this.setState({ openModal: false });
    }
  }
  render() {
    const { img } = this.props;
    const { openModal } = this.state;
    return (
      <>
        <img
          className={css.ImageGalleryItemImage}
          src={img.webformatURL}
          alt={img.id}
          onClick={this.handleOpenModal}
        />
        {openModal ? (
          <ModalGallery img={img} handleOpenModal={this.handleOpenModal} />
        ) : null}
      </>
    );
  }
}
