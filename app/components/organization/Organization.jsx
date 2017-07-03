import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';

export class Organization extends React.Component {
  constructor (props) {
    super(props);

    this.setSelectedOrganization = this.setSelectedOrganization.bind(this);
  }

  setSelectedOrganization() {
    var {organization, dispatch, viewOrganization} = this.props;
    dispatch(actions.setSelectedOrganization(organization));
    viewOrganization();
  }

  render() {
<<<<<<< HEAD
    var {did, name, address1, country, mobile, email, dispatch} = this.props;
    var address = `${address1}, ${country}`;
    console.log(did);
=======
    var {organization, dispatch} = this.props;
    var address = `${organization.address1}, ${organization.country}`;
>>>>>>> 1277d88b1412b842b9df35fdf4c95c9079e92934
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
