import React from 'react';
import PropTypes from 'prop-types';

const PlaceIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={fill}
      d="M22,22H2V20H22V22M22,6H2V3H22V6M20,7V19H17V11C17,11 14.5,10 12,10C9.5,10 7,11 7,11V19H4V7H20Z"
    />
  </svg>
);

export default PlaceIcon;

PlaceIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

PlaceIcon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#FFFFFF',
};
