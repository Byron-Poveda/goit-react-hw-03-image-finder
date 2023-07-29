import PropTypes from 'prop-types';
import React, { Component } from 'react';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
import SearchForm from './Searchbar/SearchForm';
import Button from 'components/button/Button';
import ListGallery from './ListGallery/ListGallery';
import Loader from 'components/Loader/Loader';
import css from './GalleryImages.module.css';

export default class GalleryImages extends Component {
  static propTypes = { form: PropTypes.func };
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      images: [],
      loading: false,
      totalHits: 0,
      params: {
        key: '36227558-9625164a7e143cb1d3fcc8b96',
        lang: 'en,es',
        page: 1,
        per_page: 12,
      },
    };
    this.loadMore = this.loadMore.bind(this);
    this.imgData = this.imgData.bind(this);
    this.searchDataApi = this.searchDataApi.bind(this);
  }
  componentDidMount() {
    this.setState({ loading: true });
    this.searchDataApi('');
  }
  imgData(data) {
    this.setState({ images: data.data.hits });
  }
  searchDataApi(value) {
    const { params } = this.state;
    this.setState({ loading: true, search: value });
    axios.get(`https://pixabay.com/api/?q=${value}`, { params }).then(res => {
      this.setState({
        images: res.data.hits,
        loading: false,
        totalHits: res.data.totalHits,
      });
    });
  }
  loadMore() {
    this.setState(
      prevState => ({
        params: {
          ...prevState.params,
          per_page: prevState.params.per_page + 12,
        },
      }),
      () => {
        // Esta función se ejecutará después de que el estado se haya actualizado correctamente.
        this.searchDataApi(this.state.search);
      }
    );
  }

  render() {
    const {
      images,
      loading,
      totalHits,
      params: { per_page },
    } = this.state;
    return (
      <>
        <header className={css.Searchbar}>
          <SearchForm
            searchDataApi={this.searchDataApi}
            imgData={this.imgData}
          />
        </header>
        {loading ? <Loader /> : null}
        <ListGallery images={images} />
        {images.length > 0 && totalHits > per_page ? (
          <div className={css.buttonContainer}>
            <Button
              type="button"
              className={css.Button}
              onClick={this.loadMore}
            >
              Load More...
            </Button>
          </div>
        ) : null}
      </>
    );
  }
}
