import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalGallery from '../ModalGallery/ModalGallery';
import styled from 'styled-components';
const Img = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
const ItemGallery = ({ img = {} }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = e => {
    if (e.type === 'click') {
      return setOpenModal(!openModal);
    }
    if (e.type === 'keydown' && e.code === 'Escape') {
      return setOpenModal(false);
    }
  };
  return (
    <>
      <Img src={img.webformatURL} alt={img.id} onClick={handleOpenModal} />
      {openModal ? (
        <ModalGallery img={img} handleOpenModal={handleOpenModal} />
      ) : null}
    </>
  );
};

ItemGallery.propTypes = { img: PropTypes.object };

export default ItemGallery;
