import React, { ReactElement } from 'react';
import { render, RenderResult, wait } from '@testing-library/react';
import pretty from 'pretty';
import NewsfeedView from './NewsfeedView';
import { AuthContext } from '../../Store/Store';
import * as endpoints from '../../Services/PostApi/api';
import { PublicPost } from '../../Services/PostApi/models';

jest.mock('../../Molecules/PublicPostCard/PublicPostCard', () => (): ReactElement => (<p>PublicPostCard</p>));

const renderComponent = (isAuthed = false): RenderResult => (
  render(
    <AuthContext.Provider value={[isAuthed]}>
      <NewsfeedView />
    </AuthContext.Provider>,
  )
);
const exampleLog: PublicPost = {
  name: {
    firstName: 'Chris',
    lastName: 'Redfield',
  },
  time: new Date().toISOString(),
  content: 'Scientists have discovered a population of neurons that control hibernation-like behavior, or torpor, in mice',
  isVenting: false,
  reacts: {
    wow: 0, haha: 0, like: 12, sad: 0,
  },
};

describe('Newsfeed view view', () => {
  it('should render', async () => {
    jest.spyOn(endpoints, 'getPublicPosts').mockImplementation(jest.fn(() => Promise.resolve([exampleLog])));
    const { container } = renderComponent();
    await wait(() => {
      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });

  it('should show an error if the api call fails', async () => {
    jest.spyOn(endpoints, 'getPublicPosts').mockImplementation(jest.fn(() => Promise.reject()));
    const { container } = renderComponent();
    await wait(() => {
      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
