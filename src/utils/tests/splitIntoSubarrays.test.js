import { splitIntoSubarrays } from 'utils';

describe('function splitIntoSubarrays should return', () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  it('correct array of subarrays', () => {
    expect(splitIntoSubarrays(array, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(splitIntoSubarrays(array, 20)).toEqual([[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
    expect(splitIntoSubarrays(array, 4)).toEqual([[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
  });
});
