import {
  CONFERENCES_REQUEST,
  CONFERENCES_RECEIVE,
  CONFERENCES_FAILURE,
} from '../actions/conferenceActions';

const conferences = (
  state = {
    isFetching: false,
    data: [],
  },
  { type, data, message },
) => {
  switch (type) {
    case CONFERENCES_REQUEST:
      return {
        ...state,
        ...{
          isFetching: true,
          success: false,
          message: 'Loading...',
        },
      };
    case CONFERENCES_RECEIVE:
      return {
        ...state,
        ...{
          isFetching: false,
          success: true,
          data,
          message: 'Successful!',
        },
      };
    case CONFERENCES_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          success: false,
          message,
        },
      };
    default:
      return state;
  }
};

export default conferences;
