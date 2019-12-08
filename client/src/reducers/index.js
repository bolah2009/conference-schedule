import { combineReducers } from 'redux';
import conferences from './conferences';
import authUser from './auth';
import schedules from './schedule';

export default combineReducers({
  conferences,
  authUser,
  schedules,
});
