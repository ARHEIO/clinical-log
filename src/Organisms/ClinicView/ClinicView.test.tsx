import React, { ReactElement } from 'react';
import { render, wait } from '@testing-library/react';
import pretty from 'pretty';
import ClinicView from './ClinicView';
import * as endpoints from '../../Services/PostApi/api';
import { Post } from '../../Services/PostApi/models';

jest.mock('../../Molecules/MedicalLogCard/MedicalLogCard', () => (): ReactElement => (<p>MedicalLogCard</p>));

const exampleLog: Post = {
  name: {
    firstName: 'Chris',
    lastName: 'Redfield',
  },
  time: '2020-06-12T01:30:35.096Z',
  content: 'Patient in room 78 blood pressure is 128/70',
};

describe('Clinic view', () => {
  it('should render', async () => {
    jest.spyOn(endpoints, 'getClinicalLog').mockImplementation(jest.fn(() => Promise.resolve([exampleLog])));
    const { container } = render(<ClinicView />);
    await wait(() => {
      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });

  it('should show an error if the api call fails', async () => {
    jest.spyOn(endpoints, 'getClinicalLog').mockImplementation(jest.fn(() => Promise.reject()));
    const { container } = render(<ClinicView />);
    await wait(() => {
      expect(pretty(container.innerHTML)).toMatchSnapshot();
    });
  });
});
