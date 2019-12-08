import React from 'react';
import { v4 } from 'node-uuid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { findByID, formatToTime, formatToDate } from '../helpers/helpers';
import AddToScheduleButton from './AddToScheduleButton';
import Navigation from './Navigation';
import TimeIcon from './icons/TimeIcon';
import PlaceIcon from './icons/PlaceIcon';

const Agenda = ({
  agenda,
  match: {
    params: { conferenceID },
  },
}) => {
  if (!agenda) {
    return <Redirect to={`/conferences/${conferenceID}/agendas`} />;
  }
  const { description, location, startTime, endTime, title, id } = agenda;
  return (
    <div>
      <Navigation navLabel={title} />
      <main className="agenda">
        <header className="agenda-header">
          <div className="agenda-time-location d-flex col ai-c jc-c">
            <div className="agenda-date-time d-flex ai-c">
              <div className="icon d-flex jc-c ai-c">
                <TimeIcon />
              </div>
              <div className="text d-flex col jc-c">
                <p className="text-label">Date & Time</p>
                <p className="text-time">
                  <span>{`${formatToDate(startTime)} `}</span>
                  <span className="lower">{`${formatToTime(startTime)} - ${formatToTime(endTime)}`}</span>
                </p>
              </div>
            </div>
            <div className="agenda-location  d-flex ai-c">
              <div className="icon d-flex jc-c ai-c">
                <PlaceIcon />
              </div>
              <div className="text">
                <p className="text-label">Location</p>
                <p className="text-time">
                  <span>{location}</span>
                </p>
              </div>
            </div>
          </div>
          <AddToScheduleButton iconSize="16px" buttonText="Add to your schedule" agendaID={id} />
        </header>
        <section className="desc">
          <h3 className="desc-title">Description</h3>
          {description.split('. ').map(sentence => (
            <p key={v4()}>{`${sentence}.`}</p>
          ))}
        </section>
      </main>
    </div>
  );
};

const getAgendaByID = ({ data }, { agendaID, conferenceID }) => {
  const { agendas } = findByID(data, conferenceID);
  return findByID(agendas, agendaID);
};

export default connect(({ conferences }, { match: { params } }) => {
  return { agenda: getAgendaByID(conferences, params) };
})(Agenda);

Agenda.propTypes = {
  agenda: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      conferenceID: PropTypes.string,
    }),
  }).isRequired,
};

Agenda.defaultProps = {
  agenda: undefined,
};
