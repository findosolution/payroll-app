import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';

export class Organization extends React.Component {
  render() {
    var {did, name, address1, country, mobile, email, dispatch} = this.props;
    var address = `${address1}, ${country}`;
    return(
            <tr>
              <td>
                <input id={did} type="checkbox" />
                <button type="button" id={did}
                  className="button small success button-margin"
                  onClick={() => dispatch(actions.startRemoveOrganization(did))}>Remove</button>
              </td>
              <td onClick={() => this.props.viewOrganization() }>{name}</td>
              <td onClick={() => this.props.viewOrganization() }>{address}</td>
              <td onClick={() => this.props.viewOrganization() }>{mobile}</td>
              <td onClick={() => this.props.viewOrganization() }>{email}</td>
            </tr>
    );
  }
};

export default connect()(Organization);
