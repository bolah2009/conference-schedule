import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import TextField, { Input } from '@material/react-text-field';
import { signUp } from '../actions/authActions';
import Navigation from './Navigation';
import LogInIcon from './icons/LogInIcon';

const SignUpForm = ({
  userData: { name, email, password, job_title: jobTitle, password_confirmation: passwordConf },
  handleChange,
  handleSubmit,
}) => (
  <div>
    <Navigation navLabel="Sign Up" />
    <main className="main form-main d-flex col ai-c">
      <LogInIcon />
      <form onSubmit={handleSubmit} action="#" className="form d-flex col ai-c">
        <h3>Sign Up</h3>
        <TextField className="input" label="Enter Your Name">
          <Input
            autoComplete="name"
            className="data"
            type="text"
            title="Enter Your Name"
            name="name"
            minLength="2"
            onChange={handleChange}
            value={name}
            id="name"
            required
          />
        </TextField>
        <TextField className="input" label="Enter Your Job Title">
          <Input
            autoComplete="organization-title"
            className="data"
            type="text"
            title="Enter Your Job Title"
            name="job_title"
            minLength="2"
            onChange={handleChange}
            value={jobTitle}
            id="job_title"
            required
          />
        </TextField>
        <TextField className="input" label="Enter Your Email">
          <Input
            autoComplete="email"
            title="Enter Your Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            id="email"
            maxLength="255"
            required
          />
        </TextField>
        <TextField className="input" label="Password">
          <Input
            autoComplete="new-password"
            type="password"
            title="Password"
            name="password"
            minLength="6"
            onChange={handleChange}
            value={password}
            id="password"
            required
          />
        </TextField>
        <TextField className="input" label="Confirm Your Password">
          <Input
            autoComplete="new-password"
            className="data"
            type="password"
            title="Confirm Your Password"
            name="password_confirmation"
            minLength="6"
            onChange={handleChange}
            value={passwordConf}
            id="password_confirmation"
            required
          />
        </TextField>
        <button className="input-form" type="submit" id="signup">
          Register
        </button>
      </form>
      <p className="redirect-sign-in-up d-flex col ai-c">
        <span>Have an account?</span>
        <Link to="/login"> Log in here</Link>
      </p>
    </main>
  </div>
);

const SignUp = ({ signUp }) => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    job_title: '',
    password_confirmation: '',
  });

  const { replace } = useHistory();
  const { state: from = '/' } = useLocation();
  const shouldRedirect = isAuthenticated => {
    if (isAuthenticated) {
      replace(from);
    }
    return isAuthenticated;
  };

  const isAuthenticated = useSelector(({ authUser: { authenticated } }) => authenticated);

  const handleChange = ({ target: { name, value } }) =>
    setUserData({
      ...userData,
      [name]: value,
    });

  const handleSubmit = e => {
    e.preventDefault();
    return signUp(userData);
  };

  if (shouldRedirect(isAuthenticated)) {
    return null;
  }
  return <SignUpForm userData={userData} handleSubmit={handleSubmit} handleChange={handleChange} />;
};

export default connect(
  state => state,
  { signUp },
)(SignUp);

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired,
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
    job_title: PropTypes.string,
    password_confirmation: PropTypes.string,
  }),
};

SignUpForm.defaultProps = {
  userData: {
    name: '',
    email: '',
    password: '',
    job_title: '',
    password_confirmation: '',
  },
};
