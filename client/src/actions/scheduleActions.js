import { getSchedule, addSchedule, deleteSchedule } from '../middleware/api';

export const SCHEDULE_REQUEST = 'SCHEDULE_REQUEST';
export const SCHEDULE_RECEIVE = 'SCHEDULE_RECEIVE';
export const SCHEDULE_FAILURE = 'SCHEDULE_FAILURE';
export const SCHEDULE_COMMIT = 'SCHEDULE_COMMIT';
export const SCHEDULE_REMOVE = 'SCHEDULE_REMOVE';
export const SCHEDULE_ADD = 'SCHEDULE_ADD';

const scheduleRequest = () => ({
  type: SCHEDULE_REQUEST,
});

const scheduleCommit = () => ({
  type: SCHEDULE_COMMIT,
});

const scheduleFailure = message => ({
  type: SCHEDULE_FAILURE,
  message,
});

const scheduleReceive = data => ({
  type: SCHEDULE_RECEIVE,
  data,
});

const scheduleRemove = data => ({
  type: SCHEDULE_REMOVE,
  data,
});

const scheduleAdd = data => ({
  type: SCHEDULE_ADD,
  data,
});

export const fetchSchedules = () => {
  return async (dispatch, getState) => {
    dispatch(scheduleRequest());

    const {
      authUser: {
        data: { authorization },
      },
    } = getState();
    const response = await getSchedule(authorization);
    const newData = await response.json();

    if (!response.ok) {
      const { message } = newData;
      dispatch(scheduleFailure(message));
      return;
    }
    dispatch(scheduleReceive(newData));
  };
};

export const addToSchedules = agendaID => {
  return async (dispatch, getState) => {
    dispatch(scheduleCommit());

    const {
      authUser: {
        data: { authorization },
      },
    } = getState();

    const response = await addSchedule({ agenda_id: agendaID }, authorization);
    const newData = await response.json();
    if (!response.ok) {
      const { message } = newData;
      return dispatch(scheduleFailure(message));
    }

    return dispatch(scheduleAdd(newData));
  };
};

export const removeSchedule = ScheduleID => {
  return async (dispatch, getState) => {
    dispatch(scheduleCommit());

    const {
      authUser: {
        data: { authorization },
      },
    } = getState();

    const response = await deleteSchedule(ScheduleID, authorization);
    const newData = await response.json();
    if (!response.ok) {
      const { message } = newData;
      return dispatch(scheduleFailure(message));
    }

    return dispatch(scheduleRemove(newData));
  };
};
