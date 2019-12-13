import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import AddToScheduleButton from './AddToScheduleButton';
import { formatToTime } from '../helpers/helpers';
import SpeakerIcon from './icons/SpeakerIcon';
import BrandIcon from './icons/BrandIcon';

const AgendasList = ({ agenda: { location, startTime, endTime, title, id } }) => {
  let {
    params: { conferenceID },
  } = useRouteMatch();
  const { data: conferences } = useSelector(({ conferences }) => conferences);
  if (!conferenceID) {
    ({ id: conferenceID } = conferences.find(
      ({ agendas }) => agendas.findIndex(({ id: agendaID }) => id === agendaID) !== -1,
    ));
  }

  return (
    <section>
      <div className="ai-c d-flex time-wrapper">
        <div className="bullet" />
        <h4 className="agenda-time">{`${formatToTime(startTime)} - ${formatToTime(endTime)}`}</h4>
      </div>
      <div className="d-flex jc-sb agenda-card">
        <Link
          className="link d-flex col jc-c grow-1"
          to={`/conferences/${conferenceID}/agendas/${id}`}
        >
          <h5 className="link-title">{title}</h5>
          <div className="d-flex jc-sb">
            <div className="d-flex ai-c">
              <SpeakerIcon fill="#59499e" height="12px" width="12px" />
              <p className="link-speaker"> Speaker</p>
            </div>
            <div className="d-flex ai-c">
              <BrandIcon fill="#59499e" height="12px" width="12px" />
              <p className="link-location">{location}</p>
            </div>
          </div>
        </Link>
        <AddToScheduleButton agendaID={id} />
      </div>
    </section>
  );
};

export default AgendasList;

AgendasList.propTypes = {
  agenda: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    location: PropTypes.string,
    title: PropTypes.string,
    startTime: PropTypes.string,
    endTime: PropTypes.string,
  }).isRequired,
};
