import React from 'react';
import PropTypes from 'prop-types';
import ItemGallery from './ItemGallery/ItemGallery';
import styled from 'styled-components';
const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
const ListGallery = ({ images = [] }) => {
  return (
    <List>
      {images.map(img => (
        <Item key={img.id}>
          <ItemGallery img={img} />
        </Item>
      ))}
    </List>
  );
};

ListGallery.propTypes = { images: PropTypes.array };

export default ListGallery;
