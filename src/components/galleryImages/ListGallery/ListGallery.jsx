import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemGallery from './ItemGallery';
import css from './ImageGallery.module.css';
export default class ListGallery extends Component {
  static propTypes = {
    images: PropTypes.array,
  };
  static defaultProps = { images: [] };
  render() {
    const { images } = this.props;
    return (
      <ul className={css.ImageGallery}>
        {images.map(img => (
          <li key={img.id} className={css.ImageGalleryItem}>
            <ItemGallery img={img} />
          </li>
        ))}
      </ul>
    );
  }
}
