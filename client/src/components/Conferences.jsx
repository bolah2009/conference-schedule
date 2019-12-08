import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConferenceList from './ConferenceList';
import Navigation from './Navigation';

const Conferences = ({ conferences }) => {
  const renderConference = conference => (
    <ConferenceList key={conference.id} conference={conference} />
  );

  return (
    <div>
      <Navigation navLabel="Conferences" />
      <main>
        <section className="conferences">
          <h1>All Conferences</h1>
          {conferences.data.map(renderConference)}
        </section>
      </main>
    </div>
  );
};

export default connect(state => state)(Conferences);

Conferences.propTypes = {
  conferences: PropTypes.shape({
    isFetching: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  }).isRequired,
};
