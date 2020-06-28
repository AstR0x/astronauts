import React from 'react';
import renderer from 'react-test-renderer';

import { Filter } from 'components/Filter';

describe('component Filter should', () => {
  const component = renderer.create(<Filter filter="Jackson" />);
  const tree = component.toJSON();

  it('correct render', () => {
    expect(tree).toMatchSnapshot();
  });
});
