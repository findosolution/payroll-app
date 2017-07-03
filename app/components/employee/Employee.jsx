import React from 'react';

export default class Employee extends React.Component {
  render() {
    var {did,empId, firstName, lastName, organization, department, empCategory} = this.props;

    return(
            <tr onClick={() => this.props.viewOrganization() }>
              <td>
              <input id={did} type="checkbox" />
            </td>

              <td>{empId}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{organization}</td>
              <td>{department}</td>
              <td>{empCategory}</td>
            </tr>
    );
  }
};
