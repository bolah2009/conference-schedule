import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import BrandIcon from './icons/BrandIcon';
import AccountIcon from './icons/AccountIcon';
import SignOutIcon from './icons/SignOutIcon';
import SignInIcon from './icons/SignInIcon';

const Navigation = ({ navLabel }) => {
  const { user, authorization } = useSelector(({ authUser: { data } }) => data);
  const dispatch = useDispatch();
  const logOutUser = useCallback(() => dispatch({ type: 'AUTH_REMOVE' }), [dispatch]);
  return (
    <nav className="nav-bar">
      <ul className="d-flex ai-c jc-sb">
        <li>
          <Link to="/">
            <BrandIcon />
          </Link>
        </li>
        <li className="label">{navLabel}</li>
        <li>
          {authorization ? (
            <div className="d-flex ai-c jc-sb">
              <Link className="account-icon" title={user.name} to="/account">
                <AccountIcon />
              </Link>
              <button title="Sign Out" onClick={logOutUser} type="button">
                <SignOutIcon />
              </button>
            </div>
          ) : (
            <Link title="Sign In" to="/login">
              <SignInIcon />
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default connect(state => state)(Navigation);

Navigation.propTypes = {
  currentUser: PropTypes.shape({}),
  navLabel: PropTypes.string,
};

Navigation.defaultProps = {
  currentUser: undefined,
  navLabel: 'Home Page',
};
