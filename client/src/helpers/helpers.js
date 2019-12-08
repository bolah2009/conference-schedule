const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const newDate = date => new Date(date);
const currentMonth = date => newDate(date).getMonth();
const currentDate = date => newDate(date).getDate();
const currentYear = date => newDate(date).getFullYear();

export const findByID = (array, arrayID) => array.find(({ id }) => id === Math.floor(arrayID));

export const dayDifference = (timeOne, timeTwo) => {
  return Math.floor((newDate(timeOne) - newDate(timeTwo)) / 86400000);
};

export const formatToMonthDay = (startDate, endDate) => {
  const yearDiff = currentYear(endDate) - currentYear(startDate);
  const monthDiff = currentMonth(endDate) - currentMonth(startDate);
  const dateDiff = currentDate(endDate) - currentDate(startDate);

  const startMonth = month[currentMonth(startDate)];
  const endMonth = month[currentMonth(startDate)];

  if (yearDiff > 0) {
    return `${startMonth}, ${currentDate(startDate)} ${currentYear(
      startDate,
    )} - ${endMonth}, ${currentDate(endDate)} ${currentYear(endDate)}`;
  }
  if (monthDiff > 0) {
    return `${startMonth}, ${currentDate(startDate)} - ${endMonth}, ${currentDate(endDate)}`;
  }
  if (dateDiff === 0) {
    return `${startMonth}, ${currentDate(startDate)}`;
  }
  return `${startMonth}, ${currentDate(startDate)} - ${currentDate(endDate)}`;
};

export const formatToCountDown = startDate => {
  const now = new Date();
  const start = newDate(startDate);
  const timeDiff = start - now;
  if (now > start) {
    return [0, 0, 0];
  }

  return [
    Math.floor(timeDiff / 86400000),
    Math.floor((timeDiff % 86400000) / 3600000),
    Math.floor((timeDiff % 3600000) / 60000),
  ];
};

export const formatToTime = date =>
  newDate(date).toLocaleString('default', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

export const formatToDate = date =>
  newDate(date).toLocaleString('default', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
