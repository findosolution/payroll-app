import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';
import Organization from './Organization';
import * as OrganizationAPI from 'OrganizationAPI';
import * as OrganizationUtil from 'OrganizationUtil';

export class OrganizationList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var {dispatch} = this.props;
    dispatch(actions.startAddOrganizations());
  }

  render () {
    var renderOrganizations = () => {
      var {organizations, searchOrganization, viewOrganization} = this.props;

      var filteredOrganizations = OrganizationUtil.filterOrganization(organizations, searchOrganization);
      return filteredOrganizations.map((organization) => {
        return (
          <Organization key={organization.did} organization={organization} viewOrganization={viewOrganization} />
        );
      });
    };
    return(
      <div className="row">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Organization</th>
              <th>Address</th>
              <th>Contact Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {renderOrganizations()}
          </tbody>
        </table>
      </div>
    );
  }
};

export default connect((state) => {
  return {
    organizations: state.organizations,
    searchOrganization: state.searchOrganization
  };
})(OrganizationList);
