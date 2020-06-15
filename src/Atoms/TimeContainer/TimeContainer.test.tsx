/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import pretty from 'pretty';
import TimeContainer, { testables } from './TimeContainer';

// These tests are timezone dependent, and only pass in Melbourne, Australia
// TODO: make these tests work regardless of timezone

describe('Time container', () => {
  xit('renders when passed props', () => {
    const { container } = render(<TimeContainer relative date={new Date().toISOString()} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
  it('renders when passed alternate props', () => {
    const { container } = render(<TimeContainer relative={false} date="2020-06-15T03:40:44.816Z" />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });
  describe('helper functions', () => {
    xit('returns the absolute date', () => {
      const content = testables.getAbsoluteDate('2020-06-12T01:30:35.096Z');
      expect(content).toEqual('Jun 12, 11:30 AM');
    });

    it('returns the proper content for each time difference', () => {
      const date = new Date();
      expect(testables.getRelativeDate(date.toISOString())).toEqual('Just Now');
      date.setMinutes(date.getMinutes() - 1);
      expect(testables.getRelativeDate(date.toISOString())).toEqual('1 minute ago');
      date.setMinutes(date.getMinutes() - 1);
      expect(testables.getRelativeDate(date.toISOString())).toEqual('2 minutes ago');
      date.setHours(date.getHours() - 1);
      expect(testables.getRelativeDate(date.toISOString())).toEqual('1 hour ago');
      date.setHours(date.getHours() - 1);
      expect(testables.getRelativeDate(date.toISOString())).toEqual('2 hours ago');
      date.setDate(date.getDate() - 1);
      expect(testables.getRelativeDate(date.toISOString())).toEqual('1 day ago');
      date.setDate(date.getDate() - 1);
      expect(testables.getRelativeDate(date.toISOString())).toEqual('2 days ago');
    });
  });
});
