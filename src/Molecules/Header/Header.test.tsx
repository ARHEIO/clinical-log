import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import pretty from 'pretty';
import Header from './Header';
import { AuthContext } from '../../Store/Store';

const renderComponent = (isAuthed = false): RenderResult | any => {
  const authFn = jest.fn();
  const result = render(
    <AuthContext.Provider value={[{ isAuthed }, authFn]}>
      <Header />
    </AuthContext.Provider>,
  );
  return { ...result, authFn };
};

describe('Header', () => {
  it('should render when unauthed', () => {
    const { container } = renderComponent();
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render when authed', () => {
    const { container } = renderComponent(true);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should cause a login event when pressing the button', () => {
    const { container, authFn } = renderComponent();
    const logInButton = container.querySelector('.log-in-button');
    fireEvent.click(logInButton);
    expect(authFn).toHaveBeenCalledWith({ isAuthed: true });
  });
});
