import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import { fetchSchedules } from '../actions/scheduleActions';

const Account = () => {
  const { user, authenticated } = useSelector(
    ({
      authUser: {
        data: { user },
        authenticated,
      },
    }) => ({
      user,
      authenticated,
    }),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) {
      dispatch(fetchSchedules());
    }
  }, [dispatch, authenticated]);

  if (authenticated) {
    return <ProfilePage user={user} />;
  }
  return (
    <Redirect
      to={{
        pathname: '/login',
        state: { from: '/account' },
      }}
    />
  );
};

export default Account;
