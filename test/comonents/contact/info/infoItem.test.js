import React from 'react';
import renderer from 'react-test-renderer';
import InfoItem from '../../../../src/components/contact/info/infoItem';

test('InfoItem render info', () => {

  const tree = renderer.create(<InfoItem />)
  let tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});