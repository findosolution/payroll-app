import React from 'react';
import { connect } from 'react-redux';

export class OrganizationDetail extends React.Component {
  render() {
    var { selectedOrganization } = this.props;
    var address = `${selectedOrganization.address1}, ${selectedOrganization.country}`;
    return(
      <div>
          <label>Name :</label><label>{selectedOrganization.name}</label>
          <label>Address :</label><label>{address}</label>
          <label>Contact :</label><label>{selectedOrganization.mobile}</label>
          <label>Email :</label><label>{selectedOrganization.email}</label>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    selectedOrganization: state.selectedOrganization
  }
})(OrganizationDetail)
