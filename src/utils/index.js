import { MILLISECONDS_IN_SECOND } from '../constants';

const formatter = new Intl.DateTimeFormat('ru', []);

export const formatDate = timestamp => formatter.format(timestamp * MILLISECONDS_IN_SECOND);

export const splitIntoSubarrays = (array, subarraySize) => {
  const result = [];

  for (let i = 0; i < Math.ceil(array.length / subarraySize); i++) {
    result[i] = array.slice((i * subarraySize), (i * subarraySize) + subarraySize);
  }

  return result;
};

export const filterAstronauts = (filter, astronauts) => (
  astronauts.filter(({ name, date, mission }) => {
    const lowerCaseFilter = filter.toLowerCase();
    const lowerCaseName = name.toLowerCase();
    const lowerCaseDate = formatDate(date).toLowerCase();
    const lowerCaseMission = mission.toLowerCase();

    return lowerCaseName.includes(lowerCaseFilter)
      || lowerCaseDate.includes(lowerCaseFilter)
      || lowerCaseMission.includes(lowerCaseFilter);
  }));
