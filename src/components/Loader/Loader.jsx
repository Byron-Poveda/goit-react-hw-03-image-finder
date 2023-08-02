import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
const LoaderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
  return (
    <LoaderDiv>
      <RotatingLines
        RottrokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="55"
        visible={true}
      />
      Loading...
    </LoaderDiv>
  );
};

export default Loader;
