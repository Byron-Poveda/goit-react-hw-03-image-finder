import React, { Component } from 'react';
import { GalleryImages } from './galleryImages/GalleryImages';
import css from './App.module.css';
export default class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <GalleryImages />
      </div>
    );
  }
}
