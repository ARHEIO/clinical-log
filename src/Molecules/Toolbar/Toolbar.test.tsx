import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import pretty from 'pretty';
import Toolbar from './Toolbar';

const renderComponent = (location: any): RenderResult | any => {
  const result = render(
    <Toolbar location={location} />,
  );
  return { ...result };
};

describe('Toolbar', () => {
  it('should render when clinic prop passed', () => {
    const { container } = renderComponent('clinic');
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render when newsfeed prop passed', () => {
    const { container } = renderComponent('newsfeed');
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render when bad prop passed', () => {
    const { container } = renderComponent('asdfasdf');
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
