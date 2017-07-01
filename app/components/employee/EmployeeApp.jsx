import React from 'react';

import EmployeeSearch from './EmployeeSearch';
import EmployeeList from './EmployeeList';
import AddEmployeeModal from './AddEmployeeModal';
import ViewEmployeeModal from './ViewEmployeeModal';


export default class EmployeeApp extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showAddModal:false,
      showViewModal: false
    };

    this._addEmployee = this._addEmployee.bind(this);
    this._viewEmployee = this._viewEmployee.bind(this);
    this._hideEmployeeModal = this._hideEmployeeModal.bind(this);
  }

  _addEmployee(){
    this.setState({
        showAddModal:true
    });
  }

  _hideEmployeeModal(){
    this.setState({
        showAddModal:false
    });
  }

  _viewEmployee(){
    this.setState({
        showViewModal:true
    });
  }

  render () {
    return(
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h2>Employees</h2>
          </div>
        </div>
        <div className="row">
          <div className="large-6 columns">
            <EmployeeSearch/>
          </div>
          <div className="large-3 large-offset-3 columns">
            <button type="button" className="button button-margin" onClick={() => this._addEmployee()}>Add</button>
            <button type="button" className="button button-margin" >Delete</button>
          </div>
        </div>
         <EmployeeList viewEmployee={this._viewEmployee}/>
      </div>
    );
  }
};
