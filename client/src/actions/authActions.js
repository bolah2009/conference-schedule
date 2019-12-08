import { loginUser, signUpUser } from '../middleware/api';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_RECEIVE = 'AUTH_RECEIVE';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const AUTH_REMOVE = 'AUTH_REMOVE';

const authorizationRequest = () => ({
  type: AUTH_REQUEST,
});

const authorizationFailure = message => ({
  type: AUTH_FAILURE,
  message,
});

const authorizationReceive = data => ({
  type: AUTH_RECEIVE,
  data,
});

const authorizationRemove = () => ({
  type: AUTH_REMOVE,
});

const authenticate = (authType, data = {}) => {
  return async dispatch => {
    dispatch(authorizationRequest());
    const response = await authType(data);
    const newData = await response.json();

    if (!response.ok) {
      const { message } = newData;
      return dispatch(authorizationFailure(message));
    }

    return dispatch(authorizationReceive(newData));
  };
};

export const logIn = (data = {}) => authenticate(loginUser, data);

export const logOut = () => dispatch => dispatch(authorizationRemove());

export const signUp = (data = {}) => authenticate(signUpUser, data);
