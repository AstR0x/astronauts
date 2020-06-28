export const orderBy = (array, field, direction) => {
  const type = typeof array[0][field];

  const sortedArray = type !== 'number'
    ? array.sort((a, b) => (a[field] > b[field] ? 1 : -1))
    : array.sort((a, b) => a[field] - b[field]);

  return direction === 'asc' ? sortedArray : sortedArray.reverse();
};
