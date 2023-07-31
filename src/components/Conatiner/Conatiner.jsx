import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
  };
  static defaultProps = {
    children: '',
  };
  render() {
    const { children } = this.props;
    return <section>{children}</section>;
  }
}
