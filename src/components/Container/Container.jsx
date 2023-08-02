import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children = '' }) => {
  return <section>{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
