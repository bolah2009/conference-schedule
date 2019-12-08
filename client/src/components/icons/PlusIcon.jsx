import React from 'react';
import PropTypes from 'prop-types';

const PlusIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path fill={fill} d="M20 14H14V20H10V14H4V10H10V4H14V10H20V14Z" />
  </svg>
);

export default PlusIcon;

PlusIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

PlusIcon.defaultProps = {
  width: '8px',
  height: '8px',
  fill: '#FFFFFF',
};
