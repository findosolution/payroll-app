import React from 'react';

import OrganizationSearch from 'OrganizationSearch';
import OrganizationList from 'OrganizationList';

export default class OrganizationApp extends React.Component {
  render () {
    return(
      <div>
        <h1>Organizations</h1>
        <OrganizationSearch/>
        <OrganizationList/>
      </div>
    );
  }
};
