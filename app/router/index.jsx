import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import OrganizationApp from 'OrganizationApp';
import User from 'User';
import Login from 'Login';

export default (
  <Router history={hashHistory}>
    <Route path="/">
      <Route path="/organizations" component={OrganizationApp}/>
      <Route path="/user" component={User}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>
);
