import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AgendasList from './AgendasList';
import { findByID, dayDifference } from '../helpers/helpers';
import Navigation from './Navigation';

const Agendas = ({ conferenceID, startDate, agendas }) => {
  if (!agendas) {
    return <Redirect to={`/conferences/${conferenceID}`} />;
  }
  const groupAgendasByDay = ses => {
    const agendasByDay = [];
    ses.forEach(agenda => {
      const dayIndex = dayDifference(agenda.startTime, startDate);
      if (agendasByDay[dayIndex] === undefined) {
        agendasByDay[dayIndex] = [];
      }
      agendasByDay[dayIndex].push(agenda);
    });
    return agendasByDay;
  };

  const renderAgenda = agenda => <AgendasList key={agenda.id} agenda={agenda} />;

  const renderAgendaByDay = (agendaByDay, index) => (
    <section key={index}>
      <div className="ai-c d-flex day-wrapper">
        <div className="bullet" />
        <h3 className="agenda-day">{`Day ${index + 1}`}</h3>
      </div>
      {agendaByDay.map(renderAgenda)}
    </section>
  );

  return (
    <div>
      <Navigation navLabel="Agenda" />
      <main className="agendas">
        <div className="agenda-wrapper">{groupAgendasByDay(agendas).map(renderAgendaByDay)}</div>
      </main>
    </div>
  );
};

const getAgendaByID = ({ data }, { conferenceID }) => {
  const currentConference = findByID(data, conferenceID);
  if (currentConference) {
    const { startDate = undefined, agendas } = findByID(data, conferenceID);
    return { conferenceID, startDate, agendas };
  }
  return { conferenceID };
};

export default connect(({ conferences }, { match: { params } }) => {
  return getAgendaByID(conferences, params);
})(Agendas);

Agendas.propTypes = {
  conferenceID: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  agendas: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};
