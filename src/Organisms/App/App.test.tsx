import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import App from './App';

it('renders learn react link', () => {
  const { container } = render(<App />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
