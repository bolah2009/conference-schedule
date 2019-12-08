import React from 'react';
import PropTypes from 'prop-types';

const AgendaIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 0 512 512">
    <circle cx="386" cy="210" r="20" fill={fill} />
    <path
      d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20V120c0-44.112-35.888-80-80-80z"
      fill={fill}
    />
    <path
      d="M391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z"
      fill={fill}
    />
    <path
      d="M420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
      fill={fill}
    />
    <circle cx="299" cy="210" r="20" fill={fill} />
    <circle cx="212" cy="297" r="20" fill={fill} />
    <circle cx="125" cy="210" r="20" fill={fill} />
    <circle cx="125" cy="297" r="20" fill={fill} />
    <circle cx="125" cy="384" r="20" fill={fill} />
    <circle cx="212" cy="384" r="20" fill={fill} />
    <circle cx="212" cy="210" r="20" fill={fill} />
  </svg>
);

export default AgendaIcon;

AgendaIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

AgendaIcon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#5cba47',
};
