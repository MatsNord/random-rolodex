import React from 'react';
import DateItem from '../../../../src/components/contact/date/date';
import renderer from 'react-test-renderer';

test('InfoItem render info', () => {
  const component = renderer.create(<DateItem />);
  let tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});