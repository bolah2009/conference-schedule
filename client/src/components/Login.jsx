import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import TextField, { Input } from '@material/react-text-field';
import { logIn } from '../actions/authActions';
import Navigation from './Navigation';
import LogInIcon from './icons/LogInIcon';

const Login = () => {
  const { replace } = useHistory();
  const { state: from = '/' } = useLocation();
  const shouldRedirect = isAuthenticated => {
    if (isAuthenticated) {
      replace(from);
    }
    return isAuthenticated;
  };

  const isAuthenticated = useSelector(({ authUser: { authenticated } }) => authenticated);
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({ email: '', password: '' });
  const { email, password } = loginState;
  const handleSubmit = e => {
    e.preventDefault();
    console.log(loginState);
    return dispatch(logIn(loginState));
  };

  const handleChange = ({ target: { value, name } }) => {
    console.log(loginState);
    setLoginState({
      ...loginState,
      [name]: value,
    });
    console.log(loginState);
  };

  if (shouldRedirect(isAuthenticated)) {
    return null;
  }

  return (
    <div>
      <Navigation navLabel="Sign In" />
      <main className="main form-main d-flex col ai-c">
        <LogInIcon />
        <form onSubmit={e => handleSubmit(e)} action="#" className="form d-flex col ai-c">
          <h3>Sign In</h3>
          <TextField className="input" label="Email">
            <Input
              required
              title="Email"
              type="email"
              autoComplete="email"
              name="email"
              maxLength="100"
              value={email}
              onChange={e => handleChange(e)}
            />
          </TextField>
          <TextField className="input" label="Password">
            <Input
              autoComplete="current-password"
              inputType="password"
              title="Password"
              value={password}
              name="password"
              minLength="6"
              onChange={e => handleChange(e)}
              id="password"
              required
            />
          </TextField>
          <button className="input-form" type="submit" id="login">
            Log In
          </button>
        </form>
        <p className="redirect-sign-in-up d-flex col ai-c">
          <span>Don&apos;t have an account?</span>
          <Link to="/signup"> Sign up here</Link>
        </p>
      </main>
    </div>
  );
};

export default Login;
