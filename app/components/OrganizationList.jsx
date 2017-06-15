import React from 'react';

import Organization from 'Organization';

export default class OrganizationList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      organizations: props.organizations
    };
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
