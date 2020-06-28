import { formatDate } from './formatDate';

export const filterAstronauts = (astronauts, filter) => (
  astronauts.filter(({ name, date, mission }) => {
    const lowerCaseFilter = filter.toLowerCase();
    const lowerCaseName = name.toLowerCase();
    const lowerCaseDate = formatDate(date).toLowerCase();
    const lowerCaseMission = mission.toLowerCase();

    return lowerCaseName.includes(lowerCaseFilter)
      || lowerCaseDate.includes(lowerCaseFilter)
      || lowerCaseMission.includes(lowerCaseFilter);
  }));
