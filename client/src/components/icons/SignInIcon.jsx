import React from 'react';
import PropTypes from 'prop-types';

const SignInIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 24 24">
    <path
      fill={fill}
      d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
    />
  </svg>
);

export default SignInIcon;

SignInIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

SignInIcon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#FFFFFF',
};
