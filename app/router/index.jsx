import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import OrganizationApp from 'OrganizationApp';
import User from 'User';
import Login from 'Login';
import App from 'App';
import Main from 'Main';
import AddOrganization from 'AddOrganization';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Login}/>
      <Route path="/main" component={Main} >
        <Route path="organizations" component={OrganizationApp}/>
        <Route path="addOrganization" component={AddOrganization}/>
        <Route path="user" component={User}/>
        <IndexRoute component={OrganizationApp}/>
      </Route>
    </Route>
  </Router>
);
