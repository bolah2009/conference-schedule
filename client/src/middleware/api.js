const fetchData = async (url = '', data = {}, auth = '', method = 'POST') => {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response;
};

const postData = (url = '', data = {}, auth = '') => fetchData(url, data, auth, 'POST');

const deleteData = (url = '', auth = '') => fetchData(url, {}, auth, 'DELETE');

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
  return postData(`/schedules`, data, auth);
};

export const getSchedule = auth => {
  return getData(`/schedules`, auth);
};

export const deleteSchedule = (scheduleID, auth) => {
  return deleteData(`/schedules/${scheduleID}`, auth);
};

export const getConferences = auth => {
  return getData(`/conferences`, auth);
};
