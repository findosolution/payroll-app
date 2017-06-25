import React from 'react';

export default class Employee extends React.Component {
  render() {
    var {empID, empFirstName, empLastName, empOrganization, empDepartment, empCategory} = this.props;
    var address = `${address1}, ${country}`;
    return(
            <tr onClick={() => this.props.viewOrganization() }>
              <td>
                <input id={did} type="checkbox" />
              </td>
              <td>{empID}</td>
              <td>{empFirstName}</td>
              <td>{empLastName}</td>
              <td>{empOrganization}</td>
              <td>{empDepartment}</td>
              <td>{empCategory}</td>
            </tr>
    );
  }
};
