import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import App from './App';

describe('App', () => {
  it('should render', () => {
    const { container } = render(<App />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
