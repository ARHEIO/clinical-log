import React, { ReactElement, useEffect, useState } from 'react';
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
  if (timeDifference < oneMinute) {
    return 'Just Now';
  } if (timeDifference < oneHour) {
    return (timeDifference < (oneMinute * 2)) ? '1 minute ago' : `${Math.floor(timeDifference / oneMinute)} minutes ago`;
  } if (timeDifference < oneDay) {
    return (timeDifference < oneHour * 2) ? '1 hour ago' : `${Math.floor(timeDifference / oneHour)} hours ago`;
  }
  return (timeDifference < oneDay * 2) ? '1 day ago' : `${Math.floor(timeDifference / oneDay)} days ago`;
};

const testables = {
  getRelativeDate,
  getAbsoluteDate,
};

const TimeContainer = ({ time, relative }: {time: string; relative: boolean}): ReactElement => {
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const parsedDate = relative ? getRelativeDate(time) : getAbsoluteDate(time);
    setContent(parsedDate);
    if (relative) { // keep relative time fresh
      setInterval(() => setContent(getRelativeDate(time)), 60000);
    }
  }, [setContent, time, relative]);

  return (
    <p>{content}</p>
  );
};

export default TimeContainer;

export {
  testables,
};
