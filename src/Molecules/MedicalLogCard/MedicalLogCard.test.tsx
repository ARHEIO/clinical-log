import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import MedicalLogCard from './MedicalLogCard';
import { Post } from '../../Services/PostApi/models';

const defaultPost: Post = {
  name: {
    firstName: 'Chris',
    lastName: 'Redfield',
  },
  time: '2020-06-12T01:30:35.096Z',
  content: 'Scientists have discovered a population of neurons that control hibernation-like behavior, or torpor, in mice',
};

it('renders learn react link', () => {
  const { container } = render(<MedicalLogCard post={defaultPost} />);
  expect(pretty(container.innerHTML)).toMatchSnapshot();
});
