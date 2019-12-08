import { AUTH_REQUEST, AUTH_RECEIVE, AUTH_FAILURE, AUTH_REMOVE } from '../actions/authActions';

const authUser = (
  state = {
    isFetching: false,
    data: {},
  },
  { type, data, message },
) => {
  switch (type) {
    case AUTH_REQUEST:
      return {
        ...state,
        ...{
          isFetching: true,
          authenticated: false,
          message: 'Loading...',
        },
      };
    case AUTH_RECEIVE:
      return {
        ...state,
        ...{
          isFetching: false,
          authenticated: true,
          data,
          message: 'Successful!',
        },
      };
    case AUTH_REMOVE:
      return {
        ...state,
        ...{
          isFetching: false,
          authenticated: false,
          data: {},
          message: 'Logged Out!',
        },
      };
    case AUTH_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          authenticated: false,
          message,
        },
      };
    default:
      return state;
  }
};

export default authUser;
