import React, { ReactElement, ReactNode } from 'react';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';

import './PostForm.scss';
import { TextField, Checkbox, FormControlLabel } from '@material-ui/core';
import Card from '../../Atoms/Card/Card';

const PostForm = (props: {onSubmitParent: Function; isPublic?: boolean}): ReactElement => {
  const { onSubmitParent, isPublic } = props;
  return (
    <Card>
      <Formik
        initialValues={{ postContent: '' }}
        onSubmit={async (values): Promise<void> => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          onSubmitParent(values);
        }}
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
                    control={
                      <Checkbox value={values.isVent} />
                    }
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
