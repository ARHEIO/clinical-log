/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Store/Store';

// TODO: find a better way to implement private routes than playing the assignment game

const PrivateRoute = (props: any): ReactElement => {
  const { component, ...rest } = props;
  const Component = component;
  const [authContext] = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(innerProps): ReactElement => (
        authContext.isAuthed === true
          ? <Component {...innerProps} />
          : <Redirect to="/newsfeed" />
      )}
    />
  );
};

export default PrivateRoute;
