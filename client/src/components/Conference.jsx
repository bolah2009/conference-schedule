import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { findByID, formatToCountDown } from '../helpers/helpers';
import Navigation from './Navigation';
import AgendaIcon from './icons/AgendaIcon';
import SpeakerIcon from './icons/SpeakerIcon';
import SponsorIcon from './icons/SponsorIcon';
import ExhibitorsIcon from './icons/ExhibitorsIcon';
import ContactIcon from './icons/ContactIcon';
import MapIcon from './icons/MapIcon';

const Conference = ({ conference, location: { pathname } }) => {
  if (!conference) {
    return <Redirect to="/conferences" />;
  }
  const { name, startDate } = conference;
  const [days, hours, minutes] = formatToCountDown(startDate);

  const TwitterFeeds = () => (
    <section className="twitter-feeds">
      <h4 className="twitter-feeds-title">Twitter Feeds</h4>
      <div className="twitter-feeds-item">
        <div className="d-flex ai-c">
          <div className="bullet" />
          <h5>18 March 2018</h5>
        </div>
        <p>Lorem lorem this is a lorem, rem lorem this is a lorem, rem lorem this is a lorem</p>
      </div>
      <div className="twitter-feeds-item">
        <div className="d-flex ai-c">
          <div className="bullet" />
          <h5>18 March 2018</h5>
        </div>
        <p>Lorem lorem this is a lorem, rem lorem this is a lorem, rem lorem this is a lorem</p>
      </div>
      <div className="twitter-feeds-item">
        <div className="d-flex ai-c">
          <div className="bullet" />
          <h5>18 March 2018</h5>
        </div>
        <p>Lorem lorem this is a lorem, rem lorem this is a lorem, rem lorem this is a lorem</p>
      </div>
      <div className="twitter-feeds-item">
        <div className="d-flex ai-c">
          <div className="bullet" />
          <h5>18 March 2018</h5>
        </div>
        <p>Lorem lorem this is a lorem, rem lorem this is a lorem, rem lorem this is a lorem</p>
      </div>
      <div className="twitter-feeds-item">
        <div className="d-flex ai-c">
          <div className="bullet" />
          <h5>18 March 2018</h5>
        </div>
        <p>Lorem lorem this is a lorem, rem lorem this is a lorem, rem lorem this is a lorem</p>
      </div>
    </section>
  );

  return (
    <div>
      <Navigation navLabel={name} />
      <main className="conference">
        <header className="conference-header">
          <div className="slider">
            <div className="slides d-flex ai-c jc-c">
              <div className="half-slide-left" />
              <div className="full-slide d-flex ai-c jc-sa">
                <div className="count-day">
                  <div className="count-digit">{days}</div>
                  <div className="count-label">{days > 0 ? 'days' : 'day'}</div>
                </div>
                <div className="count-hour">
                  <div className="count-digit">{hours}</div>
                  <div className="count-label">{hours > 0 ? 'hours' : 'hour'}</div>
                </div>
                <div className="count-minute">
                  <div className="count-digit">{minutes}</div>
                  <div className="count-label">{minutes > 0 ? 'minutes' : 'minute'}</div>
                </div>
              </div>
              <div className="half-slide-right" />
            </div>
            <div className="dots d-flex jc-c">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
        </header>
        <div className="wrapper">
          <div className="menu d-flex jc-sb wrap">
            <div className="menu-item d-flex ai-c jc-c">
              <Link className="d-flex col ai-c" to={`${pathname}/agendas`}>
                <AgendaIcon />
                <span className="menu-item-text">Agenda</span>
              </Link>
            </div>
            <div className="menu-item d-flex ai-c jc-c">
              <Link className="d-flex col ai-c" to={`${pathname}/speakers`}>
                <SpeakerIcon />
                <span className="menu-item-text">Speakers</span>
              </Link>
            </div>
            <div className="menu-item d-flex ai-c jc-c">
              <Link className="d-flex col ai-c" to={`${pathname}/sponsors`}>
                <SponsorIcon />
                <span className="menu-item-text">Sponsors</span>
              </Link>
            </div>
            <div className="menu-item d-flex ai-c jc-c">
              <Link className="d-flex col ai-c" to={`${pathname}/exhibitors`}>
                <ExhibitorsIcon />
                <span className="menu-item-text">Exhibitors</span>
              </Link>
            </div>
            <div className="menu-item d-flex ai-c jc-c">
              <Link className="d-flex col ai-c" to={`${pathname}/contact`}>
                <ContactIcon />
                <span className="menu-item-text">Contact Us</span>
              </Link>
            </div>
            <div className="menu-item d-flex ai-c jc-c">
              <Link className="d-flex col ai-c" to={`${pathname}/map`}>
                <MapIcon />
                <span className="menu-item-text">Map</span>
              </Link>
            </div>
          </div>
        </div>
        <TwitterFeeds />
      </main>
    </div>
  );
};

const getConferenceByID = ({ data }, { conferenceID }) => {
  return findByID(data, conferenceID);
};

export default connect(({ conferences }, { match: { params } }) => {
  return { conference: getConferenceByID(conferences, params) };
})(Conference);

Conference.propTypes = {
  conference: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

Conference.defaultProps = {
  conference: undefined,
};
