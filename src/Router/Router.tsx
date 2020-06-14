import React, { ReactElement } from 'react';
import {
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';


import ClinicView from '../Organisms/ClinicView/ClinicView';
import NewsfeedView from '../Organisms/NewsfeedView/NewsfeedView';
import PrivateRoute from './PrivateRoute';

const Router = (): ReactElement => (
  <HashRouter basename="/">
    <Switch>
      <PrivateRoute path="/clinic" component={ClinicView} />
      <Route path="/newsfeed" component={NewsfeedView} />
      <Route path="/*" exact>
        <Redirect to="/newsfeed" />
      </Route>
    </Switch>
  </HashRouter>
);


export default Router;
