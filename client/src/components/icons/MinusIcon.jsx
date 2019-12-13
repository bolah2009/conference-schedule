import React from 'react';
import PropTypes from 'prop-types';

const MinusIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path fill={fill} d="M19,13H5V11H19V13Z" />
  </svg>
);

export default MinusIcon;

MinusIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

MinusIcon.defaultProps = {
  width: '8px',
  height: '8px',
  fill: '#FFFFFF',
};
