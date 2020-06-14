import React, { ReactElement } from 'react';
import { render, RenderResult } from '@testing-library/react';
import pretty from 'pretty';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../Store/Store';

const mockComponent = (): ReactElement => (<div>An Authed Component</div>);

jest.mock('react-router-dom', () => {
  const domOriginalModule = jest.requireActual('react-router-dom');
  return {
    __esModule: true,
    ...domOriginalModule,
    /* eslint-disable-next-line react/prop-types, react/display-name */
    Redirect: ({ to }): ReactElement => (
      <div>
        <p>
          This is the redirect:
          {to}
        </p>
      </div>
    ),
  };
});

const renderComponent = (isAuthed = false): RenderResult => (
  render(
    <AuthContext.Provider value={[{ isAuthed }]}>
      <MemoryRouter initialEntries={['/']}>
        <PrivateRoute component={mockComponent} />
      </MemoryRouter>
    </AuthContext.Provider>,
  )
);

describe('PrivateRoute', () => {
  it('should render redirect when auth is false', () => {
    const { container } = renderComponent();
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
  it('should render component when auth is true', () => {
    const { container } = renderComponent(true);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
