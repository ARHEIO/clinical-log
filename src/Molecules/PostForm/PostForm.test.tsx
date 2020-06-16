import React from 'react';
import {
  render, RenderResult, fireEvent, wait,
} from '@testing-library/react';
import pretty from 'pretty';
import PostForm from './PostForm';

const renderComponent = (isPublic: boolean): RenderResult | any => {
  const mockParentFn = jest.fn();
  const result = render(
    <PostForm onSubmitParent={mockParentFn} isPublic={isPublic} />,
  );
  return { ...result, mockParentFn };
};

describe('PostForm', () => {
  it('should render when it is a public component', () => {
    const { container } = renderComponent(true);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  it('should render when it is a private comopnent', () => {
    const { container } = renderComponent(false);
    expect(pretty(container.innerHTML)).toMatchSnapshot();
  });

  describe('submission', () => {
    it('should submit a clinical log', async () => {
      const postContent = 'This is some content to go into the post';
      const { container, mockParentFn } = renderComponent(false);

      fireEvent.change(container.querySelector('#postContent'), { target: { value: postContent } });
      container.querySelector('.post-submission__submit').click();

      await wait(() => {
        expect(mockParentFn).toHaveBeenCalledWith({ postContent });
      });
    });

    it('should submit a public post', async () => {
      const postContent = 'This is some content to go into the post';
      const { container, mockParentFn } = renderComponent(true);

      container.querySelector('input[type="checkbox"]').click();
      fireEvent.change(container.querySelector('#postContent'), { target: { value: postContent } });
      container.querySelector('.post-submission__submit').click();

      await wait(() => {
        expect(mockParentFn).toHaveBeenCalledWith({ postContent });
      });
    });

    it('should show an error if a private log contains an @ symbol', async () => {
      const postContent = 'This is some content to go into the post with a reference to @Adam';
      const { container } = renderComponent(false);

      fireEvent.change(container.querySelector('#postContent'), { target: { value: postContent } });
      container.querySelector('.post-submission__submit').click();

      await wait(() => {
        expect(container.querySelector('.input-feedback').innerHTML).toContain('Mentioned are not allowed in clinical logs');
      });
    });

    it('should chug on if a public post contains an @ symbol', async () => {
      const postContent = 'This is some content to go into the post with a reference to @Adam';
      const { container, mockParentFn } = renderComponent(true);

      fireEvent.change(container.querySelector('#postContent'), { target: { value: postContent } });
      container.querySelector('.post-submission__submit').click();

      await wait(() => {
        expect(mockParentFn).toHaveBeenCalledWith({ postContent });
      });
    });
  });
});
