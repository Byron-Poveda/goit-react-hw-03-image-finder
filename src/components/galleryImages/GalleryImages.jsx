import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
import SearchForm from './Searchbar/SearchForm';
import ListGallery from './ListGallery/ListGallery';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import styled from 'styled-components';
const HeaderSearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
const Button = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover {
    background-color: #303f9f;
  }
`;
export const GalleryImages = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);
  const paramsDefault = {
    key: '36227558-9625164a7e143cb1d3fcc8b96',
    lang: 'en,es',
    page: 1,
    per_page: 12,
  };
  const [params, setParams] = useState(paramsDefault);

  const imgData = data => {
    setImages(data.data.hits);
  };
  //En este caso, al utilizar searchDataApi dentro de useEffect, también debes usar useCallback() para mantener la estabilidad de referencia y evitar el cambio innecesario del efecto.
  const searchDataApi = useCallback(
    value => {
      setLoading(true);
      setSearch(value);
      axios.get(`https://pixabay.com/api/?q=${value}`, { params }).then(res => {
        setImages(res.data.hits);
        setLoading(false);
        setTotalHits(res.data.totalHits);
      });
    },
    [params]
  );
  const loadMore = () => {
    setParams({ ...params, per_page: params.per_page + 12 });
  };
  useEffect(() => {
    searchDataApi(search);
  }, [search, searchDataApi, params]);

  return (
    <Container>
      <HeaderSearchBar>
        <SearchForm searchDataApi={searchDataApi} imgData={imgData} />
      </HeaderSearchBar>
      <ListGallery images={images} />
      {loading ? <Loader /> : null}
      {images.length > 0 && totalHits > params.per_page ? (
        <ButtonContainer>
          <Button type="button" onClick={loadMore}>
            Load More...
          </Button>
        </ButtonContainer>
      ) : null}
    </Container>
  );
};

GalleryImages.propTypes = { form: PropTypes.func };
