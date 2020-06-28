import { MILLISECONDS_IN_SECOND } from '../constants';

const formatter = new Intl.DateTimeFormat('ru', []);

export const formatDate = timestamp => formatter.format(timestamp * MILLISECONDS_IN_SECOND);
