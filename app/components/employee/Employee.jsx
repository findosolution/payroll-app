import React from 'react';
var {connect} = require('react-redux');

export class Employee extends React.Component {
  render() {
    var {employee} = this.props;

    return(
            <tr>
              <td>
                <input id={employee.did} type="checkbox" />
              </td>
              <td>{employee.empId}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.organization}</td>
              <td>{employee.department}</td>
              <td>{employee.empCategory}</td>
            </tr>
    );
  }
};
export default connect() (Employee);
