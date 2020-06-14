import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import ClinicView from './ClinicView';

describe('Clinic view', () => {
  it('should render', () => {
    const { container } = render(<ClinicView />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
