import Toast from 'light-toast';
import {
  SCHEDULE_COMMIT,
  SCHEDULE_REQUEST,
  SCHEDULE_RECEIVE,
  SCHEDULE_FAILURE,
  SCHEDULE_REMOVE,
  SCHEDULE_ADD,
} from '../actions/scheduleActions';

const schedules = (
  state = {
    success: false,
    isFetching: false,
    data: [],
  },
  { type, data = [], message },
) => {
  Toast.hide();
  switch (type) {
    case SCHEDULE_FAILURE:
      Toast.fail(message || 'Failed', 1500);
      return {
        ...state,
        ...{
          isFetching: false,
          success: false,
          message,
        },
      };
    case SCHEDULE_RECEIVE:
      Toast.success('Done', 1500);
      return {
        ...state,
        ...{
          isFetching: false,
          success: true,
          data,
          message: 'Successful!',
        },
      };
    case SCHEDULE_REMOVE:
      Toast.success('Schedule Removed', 1500);
      return {
        ...state,
        ...{
          isFetching: false,
          success: true,
          data,
          message: 'Successful!',
        },
      };
    case SCHEDULE_ADD:
      Toast.success('Schedule Added', 1500);
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
      Toast.loading();
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
