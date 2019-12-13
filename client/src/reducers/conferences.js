import Toast from 'light-toast';
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
  Toast.hide();
  switch (type) {
    case CONFERENCES_REQUEST:
      Toast.loading('Getting conference list');
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
      Toast.fail(message || 'Failed', 1500);
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
