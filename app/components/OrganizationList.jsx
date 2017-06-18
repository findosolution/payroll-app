import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';
import Organization from 'Organization';
import * as OrganizationAPI from 'OrganizationAPI';

export class OrganizationList extends React.Component {
  constructor (props) {
    super(props);
    // we better call this inside componentDidMount() ???
    var organizations = OrganizationAPI.getOrganizations();
    var {dispatch} = props;
    dispatch(actions.addOrganizations(organizations));
    this.state = {
      organizations
    };
  }

  componentDidMount() {
    /*OrganizationAPI.getOrganizations().then(function(organizations) {
      this.setState({
        organizations: organizations
      });
    }, function(e) {
    });*/
  }

  render () {
    var {organizations} = this.props;
    var renderOrganizations = () => {
      return organizations.map((organization) => {
        return (
          <Organization key={organization.id} {...organization}/>
        );
      });
    };
    return(
      <div className="row">
        <table>
          <thead>
            <tr>
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

OrganizationList.defaultProps = {
  organizations: [
    {
      id: 1,
      name: 'EML Consultants',
      address : "Colombo",
      contact : "077 777 77 77",
      email : "test@test.com"
    },{
      id: 2,
      name: 'ABC Company',
      address : "Colombo",
      contact : "077 777 77 77",
      email : "test@test.com"
    }
  ]
};

export default connect((state) => {
  return {
    organizations: state.organizations
  };
})(OrganizationList);
