import React from 'react';
import PropTypes from 'prop-types';

const SponsorIcon = ({ width, height, fill }) => (
  <svg width={width} height={height} viewBox="0 -15 480.038 480" xmlns="http://www.w3.org/2000/svg">
    <path
      fill={fill}
      d="M472.04.02h-48a8 8 0 00-8 8v16h-7.88L353.637.668A7.861 7.861 0 00350.52.02h-84.16a56.14 56.14 0 00-39.579 16.414l-65.144 65.05c-10.567 10.282-12.621 26.504-4.95 39.094a32.79 32.79 0 004.262 5.09 71.08 71.08 0 00-8.91 34.352c-.074 30.89 19.566 58.386 48.813 68.335 29.246 9.946 61.578.13 80.355-24.398 18.777-24.527 19.82-58.3 2.582-83.937h19.867c5.719 19.199 31.446 32 54.82 32 23.38 0 49.106-12.801 54.833-32h2.73v16a8 8 0 008 8h48a8 8 0 008-8v-128a8 8 0 00-8-8zm-192 160c0 30.925-25.075 56-56 56-30.93 0-56-25.075-56-56a55.19 55.19 0 019.96-31.793 55.801 55.801 0 0144.52-24.207h1.52c1 0 1.976.128 2.976.175a31.197 31.197 0 0027.46 15.825h8.633a55.875 55.875 0 0116.93 40zm126.437-56a8 8 0 00-8 8c0 12.113-19.805 24-40 24-20.192 0-40-11.887-40-24 0-4.418-3.579-8-8-8h-56c-8.825-.028-15.973-7.176-16-16 0-8.836 7.164-16 16-16h88v-16h-88c-17.672 0-32 14.328-32 32h-.133a71.997 71.997 0 00-52 24.093c-.067-.086-.145-.148-.211-.246a15.71 15.71 0 012.84-19.062l65.144-65.075a40.012 40.012 0 0128.242-11.71h82.52l54.488 23.351c.996.43 2.067.649 3.153.649h9.52v64zm57.562 24h-32v-112h32zm0 0"
    />
    <path
      fill={fill}
      d="M216.04 136.02h16a8 8 0 018 8h16c0-13.254-10.747-24-24-24v-8h-16v8c-13.255 0-24 10.746-24 24 0 13.253 10.745 24 24 24h16a8 8 0 010 16h-16a8 8 0 01-8-8h-16c0 13.253 10.745 24 24 24v8h16v-8c13.253 0 24-10.747 24-24 0-13.254-10.747-24-24-24h-16a8 8 0 010-16zm0 0M398.152 289.148a31.73 31.73 0 00-24.457-1.082l-49.87 18.153a32.084 32.084 0 00-22.9-16.918L192.2 270.098a7.807 7.807 0 00-4.113.363l-52.254 19.016-2.738-7.52c-1.504-4.156-6.094-6.309-10.246-4.8l-60.145 21.94a8.004 8.004 0 00-4.8 10.25l-52.626 19.2a8.004 8.004 0 00-4.8 10.25L38.832 444.02a7.998 7.998 0 007.512 5.265 7.86 7.86 0 002.734-.465l52.625-19.199a7.99 7.99 0 004.133 4.524 7.98 7.98 0 006.121.273l60.137-21.895a8.004 8.004 0 004.8-10.25l-2.734-7.52 4.88-1.773 45.87 15.497a8.097 8.097 0 005.305-.067l22.543-8.207 142.84-52a31.997 31.997 0 0021-28.672 31.998 31.998 0 00-18.43-30.383zM96.23 414.594l-45.105 16.418-32.832-90.192 45.105-16.441zm17.778 2.05l-38.313-105.25 45.145-16.414 38.312 105.239zm276.101-83.464l-162.75 59.199-45.87-15.496a8 8 0 00-5.298.062l-7.52 2.739-27.362-75.2 50.234-18.28 106.61 18.8a15.848 15.848 0 0112.284 10.351c.286.922.512 1.86.68 2.81.36 1.788.383 3.624.067 5.42-1.555 8.704-9.844 14.52-18.555 13.017l-90.094-15.887-2.777 15.762 90.074 15.878c17.434 3.024 34.023-8.636 37.086-26.062.207-1.426.32-2.86.336-4.297l51.914-18.898c8.305-3.02 17.488 1.261 20.512 9.57 3.02 8.305-1.262 17.488-9.57 20.512zm0 0"
    />
  </svg>
);

export default SponsorIcon;

SponsorIcon.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.string,
};

SponsorIcon.defaultProps = {
  width: '24px',
  height: '24px',
  fill: '#ffc611',
};