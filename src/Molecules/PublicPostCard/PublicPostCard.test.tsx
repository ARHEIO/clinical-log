import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import PublicPostCard from './PublicPostCard';

it('renders learn react link', () => {
  const { container } = render(<PublicPostCard />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
