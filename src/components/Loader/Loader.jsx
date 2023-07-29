import React, { Component } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';
export default class Loader extends Component {
  render() {
    return (
      <div className={css.Loader}>
        <RotatingLines
          RottrokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="55"
          visible={true}
        />
        Loading...
      </div>
    );
  }
}
