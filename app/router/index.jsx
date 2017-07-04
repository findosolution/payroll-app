import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import OrganizationApp from 'organization/OrganizationApp';
import OrganizationDetail from 'organization/OrganizationDetail';
import User from 'User';
import Login from 'Login';
import App from 'App';
import Main from 'Main';
import EmployeeApp from 'employee/EmployeeApp';

export default (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Login}/>
      <Route path="main" component={Main} >
        <Route path="/employee" component={EmployeeApp}/>
        <Route path="/organizations" component={OrganizationApp}/>
        <Route path="/organizationDetail" component={OrganizationDetail}/>
        <IndexRoute component={OrganizationApp}/>
      </Route>
    </Route>
  </Router>
);
