import React from 'react';
import PropTypes from 'prop-types';

const MapIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill={fill}
      d="M60 6a1 1 0 00-1 0l-8 3a11 11 0 00-20 0l-8-3-18 6a1 1 0 00-1 1v48a1 1 0 001 1l18-6 18 6 18-6a1 1 0 001-1V7a1 1 0 000-1zM41 4a9 9 0 019 9c0 4-6 12-9 15-3-3-9-11-9-15a9 9 0 019-9zM6 60V48l1-1a1 1 0 100-2l-1 1V14l16-6v32a1 1 0 000 2v12zm36 0V48l1-1a1 1 0 100-2l-1 1V34a1 1 0 00-2 0v12a1 1 0 000 2v12l-16-6V42l1 1a1 1 0 000-2l-1-1V8l6 2a11 11 0 000 3c0 6 10 17 10 18a1 1 0 002 0c0-1 10-12 10-18a11 11 0 000-3l6-2v32a1 1 0 000 2v12z"
    />
    <path
      fill={fill}
      d="M45 12a4 4 0 10-4 4 4 4 0 004-4zm-6 0a2 2 0 112 2 2 2 0 01-2-2zM54 42h-2a1 1 0 101 2h2a1 1 0 00-1-2zM48 44h-2a1 1 0 101 2l2-1a1 1 0 00-1-1zM37 44h-2a1 1 0 00-1 2h2a1 1 0 001-2zM31 43l-2-1a1 1 0 10-1 2h2a1 1 0 101-1zM18 42h-2a1 1 0 101 2h2a1 1 0 00-1-2zM12 44h-2a1 1 0 101 2l2-1a1 1 0 00-1-1z"
    />
  </svg>
);

export default MapIcon;

MapIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

MapIcon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#18cebb',
};
