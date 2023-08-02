import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
const Modal = styled.div`
  max-width: 80%;
  max-height: calc(100vh - 24px);
`;
const ModalGallery = ({ img = {}, handleOpenModal = () => {} }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleOpenModal);
  });
  return (
    <Overlay onClick={handleOpenModal} onKeyDown={handleOpenModal}>
      <Modal>
        <img src={img.largeImageURL} alt={img.id} />
      </Modal>
    </Overlay>
  );
};

ModalGallery.propTypes = {
  img: PropTypes.object,
  handleOpenModal: PropTypes.func,
};

export default ModalGallery;
