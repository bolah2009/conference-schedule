import { getConferences } from '../middleware/api';

export const CONFERENCES_REQUEST = 'CONFERENCES_REQUEST';
export const CONFERENCES_RECEIVE = 'CONFERENCES_RECEIVE';
export const CONFERENCES_FAILURE = 'CONFERENCES_FAILURE';

const conferencesRequest = () => ({
  type: CONFERENCES_REQUEST,
});

const conferencesFailure = message => ({
  type: CONFERENCES_FAILURE,
  message,
});

const conferencesReceive = data => ({
  type: CONFERENCES_RECEIVE,
  data,
});

export const fetchConferences = () => {
  return async (dispatch, getState) => {
    dispatch(conferencesRequest());

    const {
      authUser: {
        data: { authorization },
      },
    } = getState();

    const response = await getConferences(authorization);
    const newData = await response.json();

    if (!response.ok) {
      const { message } = newData;
      dispatch(conferencesFailure(message));
      return;
    }
    dispatch(conferencesReceive(newData));
  };
};
