import React from 'react';
var {connect} = require('react-redux');
import {hashHistory} from 'react-router';

import * as actions from 'actions';

export class Organization extends React.Component {
  constructor (props) {
    super(props);

    this.setSelectedOrganization = this.setSelectedOrganization.bind(this);
  }

  setSelectedOrganization() {
    var {organization, dispatch} = this.props;
    dispatch(actions.setSelectedOrganization(organization));
    let url = `/organizationDetail`;
    hashHistory.push(url);
  }

  render() {
    var {organization, dispatch} = this.props;
    var address = `${organization.address1}, ${organization.country}`;
    return(
            <tr>
              <td>
                <input id={organization.did} type="checkbox" />
                <button type="button" id={organization.did}
                  className="button small success button-margin"
                  onClick={() => dispatch(actions.startRemoveOrganization(organization.did))}>Remove</button>
              </td>
              <td onClick={this.setSelectedOrganization}>{organization.name}</td>
              <td onClick={this.setSelectedOrganization}>{address}</td>
              <td onClick={this.setSelectedOrganization}>{organization.mobile}</td>
              <td onClick={this.setSelectedOrganization}>{organization.email}</td>
            </tr>
    );
  }
};

export default connect()(Organization);
