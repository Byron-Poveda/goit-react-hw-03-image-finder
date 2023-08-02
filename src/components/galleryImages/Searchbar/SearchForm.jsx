import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
const Input = styled.input`
  display: inline-block;
  width: 100vw;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &:hover {
    font: inherit;
    font-size: 18px;
  }
`;
const SearchForm = ({ searchDataApi = () => {} }) => {
  const searchImage = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = form.elements.search.value;
    searchDataApi(search);
    form.reset();
  };
  return (
    <Form onSubmit={searchImage}>
      <Button type="submit">
        <span>
          <i className="ri-search-2-line ri-lg"></i>
        </span>
      </Button>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        name="search"
        placeholder="Search images and photos"
      />
    </Form>
  );
};

SearchForm.propTypes = {
  searchDataApi: PropTypes.func,
  imgData: PropTypes.func,
};

export default SearchForm;
