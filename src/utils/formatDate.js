import { MILLISECONDS_IN_SECOND, SECONDS_IN_MINUTE } from '../constants';

const formatter = new Intl.DateTimeFormat('ru', []);

export const formatDate = timestamp => {
  const date = new Date(timestamp * MILLISECONDS_IN_SECOND);
  return formatter.format(date.getTime() + date.getTimezoneOffset() * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND);
};
