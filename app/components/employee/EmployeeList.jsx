import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';
import Employee from './Employee';

export class EmployeeList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
  }

  render () {
    var renderEmployees = () => {
      var {employees} = this.props;

      return employees.map((employee) => {
        return (
          <Employee key={employee.empID} {...employee} viewEmployee={this.props.viewEmployee} />
        );
      });
    };
    return(
      <div className="row">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Organization</th>
              <th>Department</th>
              <th>Employee Category</th>
              <th>Employee Role</th>
            </tr>
          </thead>
          <tbody>
          {renderEmployees()}
          </tbody>
        </table>
      </div>
    );
  }
};

EmployeeList.defaultProps = {
  employees: [
    {
      empID: 1,
      empFirstName: 'Supun',
      empLastName : "Gamage",
      empOrganization : "eBuilder",
      empDepartment : "Development",
      empCategory : "Permanant",
      empRole : "Developer"
    },{
      empID: 1,
      empFirstName: 'Danuka',
      empLastName : "Wijetunga",
      empOrganization : "eBuilder",
      empDepartment : "Development",
      empCategory : "Permanant",
      empRole : "Developer"
    }
  ]
};

export default EmployeeList;
