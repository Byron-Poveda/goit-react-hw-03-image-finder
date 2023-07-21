import React, { Component } from 'react';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      params: {
        key: '36227558-9625164a7e143cb1d3fcc8b96',
        lang: 'en,es',
        page: 1,
        per__page: 12,
      },
      images: [],
    };
    this.searchImage = this.searchImage.bind(this);
  }
  searchImage(e) {
    e.preventDefault();
    const { params } = this.state;
    const form = e.currentTarget;
    const search = form.elements.search.value;
    axios.get(`https://pixabay.com/api/?q=${search}`, { params }).then(res => {
      this.setState({ images: res.data.hits });
    });
    form.reset();
  }
  componentDidMount() {
    this.searchDataApi();
  }
  searchDataApi() {
    const { params } = this.state;
    axios.get(`https://pixabay.com/api/`, { params }).then(res => {
      this.setState({ images: res.data.hits });
    });
  }
  render() {
    const { images } = this.state;
    return (
      <div className="App">
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.searchImage}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">
                <i className="ri-search-2-line ri-lg"></i>
              </span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              name="search"
              placeholder="Search images and photos"
            />
          </form>
        </header>
        <ul className="ImageGallery">
          {images.map(img => (
            <li key={img.id} className="ImageGalleryItem">
              <img
                className="ImageGalleryItem-image"
                src={img.webformatURL}
                alt={img.id}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
