import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import pretty from 'pretty';
import ReactComponent from './ReactComponent';
import { Reacts } from '../../Services/PostApi/models';

const reacts: Reacts = {
  wow: 0, haha: 0, like: 12, sad: 0,
};

describe('React component', () => {
  it('renders when props are attached', () => {
    const { container } = render(<ReactComponent reacts={reacts} reactHandler={jest.fn()} />);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  describe('accepts click events of type', () => {
    it('like', () => {
      const mockReactHandler = jest.fn();
      const { container } = render(<ReactComponent reacts={reacts} reactHandler={mockReactHandler} />);
      fireEvent.click(container.querySelector('#like'));
      expect(mockReactHandler).toHaveBeenCalledWith('like');
    });

    it('haha', () => {
      const mockReactHandler = jest.fn();
      const { container } = render(<ReactComponent reacts={reacts} reactHandler={mockReactHandler} />);
      fireEvent.click(container.querySelector('#haha'));
      expect(mockReactHandler).toHaveBeenCalledWith('haha');
    });

    it('wow', () => {
      const mockReactHandler = jest.fn();
      const { container } = render(<ReactComponent reacts={reacts} reactHandler={mockReactHandler} />);
      fireEvent.click(container.querySelector('#wow'));
      expect(mockReactHandler).toHaveBeenCalledWith('wow');
    });

    it('sad', () => {
      const mockReactHandler = jest.fn();
      const { container } = render(<ReactComponent reacts={reacts} reactHandler={mockReactHandler} />);
      fireEvent.click(container.querySelector('#sad'));
      expect(mockReactHandler).toHaveBeenCalledWith('sad');
    });
  });
});
