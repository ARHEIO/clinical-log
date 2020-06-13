import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import ClinicView from './ClinicView';

it('renders learn react link', () => {
  const { container } = render(<ClinicView />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
