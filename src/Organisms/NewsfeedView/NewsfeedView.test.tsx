import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import pretty from 'pretty';
import NewsfeedView from './NewsfeedView';
import { AuthContext } from '../../Store/Store';

const renderComponent = (isAuthed = false): RenderResult => (
  render(
    <AuthContext.Provider value={[isAuthed]}>
      <NewsfeedView />
    </AuthContext.Provider>,
  )
);
describe('Newsfeed view', () => {
  it('should render', () => {
    const { container } = renderComponent();
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
});
