import React, { ReactElement, ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

import './PostForm.scss';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import Card from '../../Atoms/Card/Card';

const PostForm = (props: {onSubmitParent: Function; isPublic?: boolean}): ReactElement => {
  const { onSubmitParent, isPublic } = props;

  const validate = (values: {postContent: string}): any => {
    const errors: { postContent?: string } = {};
    if (!values.postContent) {
      errors.postContent = 'Post content is required';
    } else if (!isPublic && values.postContent.includes('@')) {
      errors.postContent = 'Mentioned are not allowed in clinical logs';
    }
    return errors;
  };

  return (
    <Card>
      <Formik
        validate={validate}
        initialValues={{ postContent: '', ventCheckbox: false }}
        onSubmit={async (values): Promise<void> => onSubmitParent(values)}
      >
        {(innerProps: any): ReactNode => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = innerProps;
          return (
            <form onSubmit={handleSubmit}>
              <TextField
                id="postContent"
                placeholder="Enter your post"
                type="text"
                value={values.postContent}
                onChange={handleChange}
                variant="outlined"
                onBlur={handleBlur}
                fullWidth
                className="post__input"
              />
              {errors.postContent && touched.postContent && (
                <div className="input-feedback">{errors.postContent}</div>
              )}
              <div className="post-submission">
                {isPublic && (
                  <FormControlLabel
                    className="post-submission__venting"
                    id="ventCheckbox"
                    control={<Checkbox value={values.isVent} onChange={handleChange} id="ventCheckbox" />}
                    label="I'm just venting"
                  />
                )}
                <Button className="post-submission__submit" color="primary" variant="contained" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </Card>
  );
};
export default PostForm;
