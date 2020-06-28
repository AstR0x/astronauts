import { orderBy } from 'utils';

const astronauts = [
  {
    id: 1,
    name: 'Sigmund Jähn',
    date: 272926800,
    days: 7,
    mission: 'Sojus 31 / Sojus 29',
    isMultiple: false,
  },
  {
    id: 2,
    name: 'Ulf Merbold',
    date: 438814800,
    days: 10,
    mission: 'STS-9',
    isMultiple: true,
  },
  {
    id: 3,
    name: 'Reinhard Furrer',
    date: 499467600,
    days: 7,
    mission: 'STS-61-A (D1)',
    isMultiple: false,
  }];

describe('function orderBy should return', () => {
  it('array in descending by names', () => {
    expect(orderBy(astronauts, 'name', 'desc')).toEqual([
      {
        id: 2,
        name: 'Ulf Merbold',
        date: 438814800,
        days: 10,
        mission: 'STS-9',
        isMultiple: true,
      },
      {
        id: 1,
        name: 'Sigmund Jähn',
        date: 272926800,
        days: 7,
        mission: 'Sojus 31 / Sojus 29',
        isMultiple: false,
      },
      {
        id: 3,
        name: 'Reinhard Furrer',
        date: 499467600,
        days: 7,
        mission: 'STS-61-A (D1)',
        isMultiple: false,
      }]);
  });

  it('array in ascending by days', () => {
    expect(orderBy(astronauts, 'days', 'asc')).toEqual([
      {
        id: 1,
        name: 'Sigmund Jähn',
        date: 272926800,
        days: 7,
        mission: 'Sojus 31 / Sojus 29',
        isMultiple: false,
      },
      {
        id: 3,
        name: 'Reinhard Furrer',
        date: 499467600,
        days: 7,
        mission: 'STS-61-A (D1)',
        isMultiple: false,
      },
      {
        id: 2,
        name: 'Ulf Merbold',
        date: 438814800,
        days: 10,
        mission: 'STS-9',
        isMultiple: true,
      }]);
  });
});
