import React from 'react';
import renderer from 'react-test-renderer';

import { Pagination } from 'components/Pagination';

describe('component Pagination should', () => {
  const component = renderer.create(
    <Pagination onChangePage={() => ({})} currentPage={2} totalPages={10} />,
  );

  const tree = component.toJSON();

  it('correct render', () => {
    expect(tree).toMatchSnapshot();
  });
});
