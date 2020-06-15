import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import IconContainer from './IconContainer';

it('renders learn react link', () => {
  const { container } = render(<IconContainer username={{ firstName: 'Adam', lastName: 'Egg' }} />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
