import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  static propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    className: PropTypes.string,
  };
  static defaultProps = {
    type: '',
    placeholder: '',
    onClick: () => {},
    name: '',
    children: {},
    className: '',
  };

  render() {
    const { type, placeholder, onClick, name, children, className } =
      this.props;
    return (
      <button
        className={className}
        type={type}
        placeholder={placeholder}
        onClick={onClick}
        name={name}
      >
        {children}
      </button>
    );
  }
}
