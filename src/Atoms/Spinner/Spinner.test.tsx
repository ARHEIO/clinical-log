import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import Spinner from './Spinner';

it('renders learn react link', () => {
  const { container } = render(<Spinner />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
