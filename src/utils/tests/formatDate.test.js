import { formatDate } from 'utils';

describe('function formatDate should return ', () => {
  it('correct date', () => {
    expect(formatDate(438814800)).toBe('28.11.1983');
  });
});
