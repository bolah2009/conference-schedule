import React from 'react';
import PropTypes from 'prop-types';

const OpenInNew = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={fill}
      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
    />
  </svg>
);

export default OpenInNew;

OpenInNew.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

OpenInNew.defaultProps = {
  width: '16px',
  height: '16px',
  fill: '#59499e',
};