import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import PublicPostCard from './PublicPostCard';
import { PublicPost } from '../../Services/PostApi/models';

const defaultPost: PublicPost = {
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

it('renders learn react link', () => {
  const { container } = render(<PublicPostCard post={defaultPost} />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
