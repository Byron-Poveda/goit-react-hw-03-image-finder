import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from 'components/button/Button';
import Input from 'components/input/Input';
import css from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    searchDataApi: PropTypes.func,
    imgData: PropTypes.func,
  };
  static defaultProps = { searchDataApi: {}, imgData: () => {} };
  constructor(props) {
    super(props);
    this.searchImage = this.searchImage.bind(this);
  }
  searchImage(e) {
    e.preventDefault();
    const { searchDataApi } = this.props;
    const form = e.currentTarget;
    const search = form.elements.search.value;
    searchDataApi(search);
    form.reset();
  }
  render() {
    return (
      <form className={css.SearchForm} onSubmit={this.searchImage}>
        <Button type="submit" className={css.SearchFormButton}>
          <span>
            <i className="ri-search-2-line ri-lg"></i>
          </span>
        </Button>

        <Input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          name="search"
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
