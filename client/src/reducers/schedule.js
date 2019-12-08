import {
  SCHEDULE_COMMIT,
  SCHEDULE_REQUEST,
  SCHEDULE_RECEIVE,
  SCHEDULE_FAILURE,
} from '../actions/scheduleActions';

const schedules = (
  state = {
    success: false,
    isFetching: false,
    data: {},
  },
  { type, data, message },
) => {
  switch (type) {
    case SCHEDULE_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          success: false,
          message,
        },
      };
    case SCHEDULE_RECEIVE:
      return {
        ...state,
        ...{
          isFetching: false,
          success: true,
          data,
          message: 'Successful!',
        },
      };
    case SCHEDULE_REQUEST:
      return {
        ...state,
        ...{
          isFetching: true,
          success: false,
          message: 'Loading...',
        },
      };
    case SCHEDULE_COMMIT:
      return {
        ...state,
        ...{
          isFetching: true,
          success: false,
          message: 'Adding to Schedule...',
        },
      };
    default:
      return state;
  }
};

export default schedules;
