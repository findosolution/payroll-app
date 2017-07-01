import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';
import Employee from './Employee';
import * as EmployeeAPI from 'EmployeeAPI';

export class EmployeeList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var {dispatch} = this.props;
    dispatch(actions.startAddEmployees());
  }

  render () {
    var renderEmployees = () => {
      var {employees} = this.props;

      console.log(employees);
      return employees.map((employee) => {
       return (
          <Employee key={employee.did} {...employee} viewEmployee={this.props.viewEmployee} />
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
      "did" : 1,
      "empId": 1,
      "firstName": 'Supun',
      "lastName" : "Gamage",
      "organization" : "eBuilder",
      "department" : "Development",
      "empCategory" : "Permanant",
      "empRole" : "Developer",
      "bankAccountNumber": 123321123321,
	    "subscribed": 1
    },{
      "did": 2,
      "empId": 2,
      "firstName": 'danuka',
      "lastName" : "wijetunge",
      "organization" : "eBuilder",
      "department" : "Development",
      "empCategory" : "Permanant",
      "empRole" : "Developer",
      "bankAccountNumber": 123321123321,
	    "subscribed": 1
    }
  ]
};

export default connect((state) => {
  return {
    employees : state.employees
  };
})(EmployeeList);
