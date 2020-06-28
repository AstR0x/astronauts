export const splitIntoSubarrays = (array, subarraySize) => {
  const result = [];

  for (let i = 0; i < Math.ceil(array.length / subarraySize); i++) {
    result[i] = array.slice((i * subarraySize), (i * subarraySize) + subarraySize);
  }

  return result;
};
