import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ConferenceList from './ConferenceList';
import { fetchConferences } from '../actions/conferenceActions';
import Navigation from './Navigation';

const Home = ({ conferences }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConferences());
  }, [dispatch]);

  const topConf = conf => conf.slice(0, 3);
  const renderConference = conference => (
    <ConferenceList key={conference.id} conference={conference} />
  );

  const TopConferences = () => (
    <section className="featured-conference">
      <h3 className="featured-conference-title">Featured Conferences</h3>
      {topConf(conferences.data).map(renderConference)}
    </section>
  );

  return (
    <div>
      <Navigation />
      <main className="home-page">
        <h1 className="home-title">Find your next Conference</h1>
        <TopConferences />
        <Link to="/conferences">See all conferences</Link>
      </main>
    </div>
  );
};

export default connect(state => state)(Home);

Home.propTypes = {
  conferences: PropTypes.shape({
    isFetching: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  }).isRequired,
};
