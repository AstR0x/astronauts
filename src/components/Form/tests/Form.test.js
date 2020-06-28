import React from 'react';
import renderer from 'react-test-renderer';

import { Form } from 'components/Form';

describe('component Form should', () => {
  const component = renderer.create(<Form />);
  const tree = component.toJSON();

  it('correct render', () => {
    expect(tree).toMatchSnapshot();
  });
});
