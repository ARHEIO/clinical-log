import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import Card from './Card';

it('renders learn react link', () => {
  const { container } = render(<Card />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
