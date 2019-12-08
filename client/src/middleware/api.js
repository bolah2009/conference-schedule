const postData = async (url = '', data = {}, auth = undefined) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
};

const getData = async (url = '', auth = '') => {
  const data = await fetch(url, {
    headers: {
      Authorization: auth,
    },
  });
  return data;
};

export const loginUser = (data = {}) => {
  return postData('/login', data);
};

export const signUpUser = (data = {}) => {
  return postData('/signup', data);
};

export const addSchedule = (data = {}, auth = '') => {
  return postData(`/schedules/new`, data, auth);
};

export const getSchedule = auth => {
  return getData(`/schedules`, auth);
};

export const getConferences = auth => {
  return getData(`/conferences`, auth);
};
