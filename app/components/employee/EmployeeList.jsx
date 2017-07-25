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
    var {dispatch, selectedOrganization} = this.props;
    if(selectedOrganization) {
      console.log('selectedOrganization :' , selectedOrganization.did);
      dispatch(actions.loadEmplyeesForOrganization(selectedOrganization.did))
    } else {
      console.log('selectedOrganization :' , 'NULL');
      dispatch(actions.startAddEmployees());
    }
  }

  render () {
    var renderEmployees = () => {
      var {employees} = this.props;

      return employees.map((employee) => {
     return (
        <Employee key={employee.did} employee={employee} />
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

export default connect((state) => {
  return {
    employees : state.employees,
    selectedOrganization: state.selectedOrganization
  };
})(EmployeeList);
