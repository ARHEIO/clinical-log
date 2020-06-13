import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import NewsfeedView from './NewsfeedView';

it('renders learn react link', () => {
  const { container } = render(<NewsfeedView />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
