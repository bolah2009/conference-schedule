import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatToMonthDay } from '../helpers/helpers';
import OpenInNewIcon from './icons/OpenInNewIcon';

const ConferenceList = ({ conference }) => {
  const { id, name, url, startDate, endDate, city, country } = conference;

  return (
    <section className="conference-card">
      <h3 className="card-title d-flex">
        <span className="card-title-name">
          <Link to={`conferences/${id}`}>{name}</Link>
        </span>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          <OpenInNewIcon />
        </a>
      </h3>
      <p>{formatToMonthDay(startDate, endDate)}</p>
      <p>{`${city}, ${country}`}</p>

      <Link to={`conferences/${id}`}>See Details</Link>
    </section>
  );
};

export default ConferenceList;

ConferenceList.propTypes = {
  conference: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
