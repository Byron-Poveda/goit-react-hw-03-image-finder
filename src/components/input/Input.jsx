import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Input extends Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    autoComplete: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
    lable: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    onBlur: PropTypes.bool,
    className: PropTypes.string,
  };
  static defaultProps = {
    type: '',
    name: '',
    autoComplete: '',
    pattern: '',
    title: '',
    label: '',
    placeholder: '',
    onChange: () => {},
    className: '',
  };
  render() {
    const {
      type,
      name,
      autoComplete,
      title,
      label,
      onChange,
      placeholder,
      className,
    } = this.props;
    return (
      <label>
        {label}
        <input
          className={className}
          type={type}
          name={name}
          autoComplete={autoComplete ? autoComplete : null}
          title={title ? title : null}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    );
  }
}
