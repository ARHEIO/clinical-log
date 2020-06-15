import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import TimeContainer from './TimeContainer';

it('renders learn react link', () => {
  const { container } = render(<TimeContainer username={{ firstName: 'Adam', lastName: 'Egg' }} />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
