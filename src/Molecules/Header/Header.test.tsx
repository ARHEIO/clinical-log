import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import Header from './Header';

it('renders learn react link', () => {
  const { container } = render(<Header />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
