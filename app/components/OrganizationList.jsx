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
      <div>
        {renderOrganizations()}
      </div>
    );
  }
};

OrganizationList.defaultProps = {
  organizations: [
    {
      id: 1,
      name: 'aaaaaa'
    },{
      id: 2,
      name: 'bbbb'
    }
  ]
};
