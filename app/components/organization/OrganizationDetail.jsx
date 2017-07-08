import React from 'react';
import { connect } from 'react-redux';
import {hashHistory} from 'react-router';

import * as actions from 'actions';


export class OrganizationDetail extends React.Component {
  constructor (props) {
    super(props);

    this.manageOrganizationEmployees = this.manageOrganizationEmployees.bind(this);
  }

  componentDidMount() {
    var { selectedOrganization, dispatch } = this.props;
    if(!selectedOrganization) {
      dispatch(actions.setSelectedOrganizationFromAPI(this.props.location.query.id));
    }
  }

  manageOrganizationEmployees () {
    var { selectedOrganization } = this.props;
    let url = `/employee?orgId=${selectedOrganization.did}`;
    hashHistory.push(url);
  }

  render() {
    var { selectedOrganization, dispatch } = this.props;
    if(!selectedOrganization) {
      return(<div>Loading...</div>);
    }

    var address = `${selectedOrganization.address1}, ${selectedOrganization.country}`;
    return(
      <div>
          <label>Name :</label><label>{selectedOrganization.name}</label>
          <label>Address :</label><label>{address}</label>
          <label>Contact :</label><label>{selectedOrganization.mobile}</label>
          <label>Email :</label><label>{selectedOrganization.email}</label>
          <button type="button" className="button button-margin" onClick={() => this.manageOrganizationEmployees() }>Manage Employees</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSelectedOrganizationFromAPI }, dispatch);
}

export default connect((state) => {
  return {
    selectedOrganization: state.selectedOrganization
  }
})(OrganizationDetail)
