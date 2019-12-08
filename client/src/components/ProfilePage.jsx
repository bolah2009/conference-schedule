import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AgendasList from './AgendasList';
import Navigation from './Navigation';
import { fetchSchedules } from '../actions/scheduleActions';

const ProfilePage = ({ user: { name, job_title: jobTitle } }) => {
  const { conferences, schedules } = useSelector(({ conferences, schedules }) => ({
    conferences,
    schedules,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSchedules());
  }, [dispatch]);

  const schedulesArray = conferences.data.flatMap(({ agendas }) =>
    agendas.filter(({ id }) => schedules.data.includes(id)),
  );

  return (
    <div>
      <Navigation navLabel="Profile Page" />
      <main className="profile">
        <h3>
          Welcome &nbsp;
          {name}
        </h3>
        <p>
          Job Description: &nbsp;
          {jobTitle}
        </p>
        <section>
          <h4>My Schedules</h4>
          {!schedules.data.length ? (
            <p>
              You have no schedule. You can go to
              <Link to="/conferences"> conferences list </Link>
              to add.
            </p>
          ) : (
            schedulesArray.map(agenda => <AgendasList key={agenda.id} agenda={agenda} />)
          )}
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;

ProfilePage.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    job_title: PropTypes.string,
  }).isRequired,
};
