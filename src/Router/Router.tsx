import React, { ReactElement } from 'react';
import {
  Switch,
  Route,
  HashRouter,
  Redirect,
} from 'react-router-dom';


import ClinicView from '../Organisms/ClinicView/ClinicView';
import NewsfeedView from '../Organisms/NewsfeedView/NewsfeedView';

const Router = (): ReactElement => (
  <HashRouter basename="/">
    <Switch>
      <Route path="/clinic" component={ClinicView} />
      <Route path="/newsfeed" component={NewsfeedView} />
      <Route path="/*" exact>
        <Redirect to="/newsfeed" />
      </Route>
    </Switch>
  </HashRouter>
);


export default Router;
