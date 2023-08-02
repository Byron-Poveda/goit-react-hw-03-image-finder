import React from 'react';
import { GalleryImages } from './galleryImages/GalleryImages';
import styled from 'styled-components';

const AppDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
function App(props) {
  return (
    <AppDiv>
      <GalleryImages />
    </AppDiv>
  );
}

App.propTypes = {};

export default App;
