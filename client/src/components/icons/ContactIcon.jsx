import React from 'react';
import PropTypes from 'prop-types';

const ContactIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <g>
      <path
        fill={fill}
        d="M62 24l-7-5V3a1 1 0 00-1-1H20a1 1 0 00-1 0L9 12a1 1 0 000 1v6l-7 5a1 1 0 000 1v36a1 1 0 001 1h58a1 1 0 001-1V25a1 1 0 000-1zM9 29l-4-4 4-3zm8 9v1a15 15 0 002 7L4 59V27zm28 1a13 13 0 01-3 8v-2a7 7 0 00-6-7 6 6 0 10-8 0 7 7 0 00-6 7v2a13 13 0 1123-8zm-21 6a5 5 0 015-5h6a5 5 0 015 5v4a13 13 0 01-16 0zm8-7a4 4 0 114-4 4 4 0 01-4 4zM20 48a15 15 0 0024 0l14 12H6zm25-2a15 15 0 002-7v-1l13-11v32zm14-21l-4 4v-7zm-6 5l-6 6a15 15 0 00-30 0l-6-6V14h8a2 2 0 002-2V4h32zM13 12l6-6v6z"
      />
      <path
        fill={fill}
        d="M26 9h22a1 1 0 000-2H26a1 1 0 000 2zM48 13H26a1 1 0 000 2h22a1 1 0 000-2zM48 19H16a1 1 0 000 2h32a1 1 0 000-2z"
      />
    </g>
  </svg>
);

export default ContactIcon;

ContactIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

ContactIcon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#8589ef',
};
