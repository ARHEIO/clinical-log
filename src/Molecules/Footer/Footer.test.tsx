import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import Footer from './Footer';

it('renders learn react link', () => {
  const { container } = render(<Footer />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
