import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import OrganizationApp from 'OrganizationApp';
import User from 'User';
import Login from 'Login';
import App from 'App';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="/organizations" component={OrganizationApp}/>
      <Route path="/user" component={User}/>
      <IndexRoute component={Login}/>
    </Route>
  </Router>
);
