import React, { ReactElement } from 'react';
import './TimeContainer.scss';

// Will adjust posting data/time based on timezone
const getAbsoluteDate = (date: string): string => {
  const options = {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('en-AU', options).format(new Date(date));
};

const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;

// TODO: refactor this so it doesn't want to make me tear my eyes out
const getRelativeDate = (date: string): string => {
  const timeDifference = Date.now() - new Date(date).getTime();
  if (timeDifference < (oneMinute * 2)) {
    return timeDifference < oneMinute ? 'Just Now' : '1 minute ago';
  } if (timeDifference < oneHour) {
    return `${Math.floor(timeDifference / oneMinute)} minutes ago`;
  } if (timeDifference < oneDay) {
    return (timeDifference < oneHour * 2) ? '1 hour ago' : `${Math.floor(timeDifference / oneHour)} hours ago`;
  }
  return `${Math.floor(timeDifference / oneDay)} days ago`;
};

const testables = {
  getRelativeDate,
  getAbsoluteDate,
};

const TimeContainer = ({ date, relative }: {date: string; relative: boolean}): ReactElement => (
  <p>{relative ? getRelativeDate(date) : getAbsoluteDate(date) }</p>
);

export default TimeContainer;

export {
  testables,
};
