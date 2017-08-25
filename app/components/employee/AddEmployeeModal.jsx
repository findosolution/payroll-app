import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
var {connect} = require('react-redux');
import * as actions from 'actions';


class AddEmployeeModal extends React.Component{

  customStyle = {
    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(0,0,0,0.8)'
    },
    content : {
      position                   : 'absolute',
      top                        : '40px',
      left                       : '40px',
      right                      : '40px',
      bottom                     : '40px',
      border                     : '1px solid #ccc',
      background                 : '#fff',
      overflow                   : 'auto',
      WebkitOverflowScrolling    : 'touch',
      borderRadius               : '4px',
      outline                    : 'none',
      padding                    : '20px'

    }
  };

  constructor(props,context){
    super(props,context);

    this.state = {
      modalIsOpen:true
    }
  //  this.handeSubmit = this.handeSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    var {dispatch, selectedOrganization} = this.props;
    var empId = this.refs.empID.value;
    var basicSalary = this.refs.basic.value;

    if(empId !== "") {

      var employee = {
        "empId": this.refs.empID.value,
    	  "firstName" : "Prasad",
    	  "lastName": "Wanigasinghe",
        "organization": selectedOrganization.did,
        "department":"IT",
        "empCategory":"Permenant",
        "empRole":"developer",
        "bankAccountNumber":"123321123321",
        "subscribed":true
      }
      var employeeSalaryContents = [];
      var additionCount = 1;
      var deductionCount = 1;

      if(basicSalary && basicSalary.length > 0) {
        employeeSalaryContents.push(new Array(0,"basic salary",basicSalary));

        for(var i = 0; i < additionCount; i++) {
          employeeSalaryContents.push(new Array(1,
            this.refs.aditionName_1.value,
            this.refs.aditionAmount_1.value));
        }

        for(var i = 0; i < deductionCount; i++) {
          employeeSalaryContents.push(new Array(2,
            this.refs.deductionName_1.value,
            this.refs.deductionAmount_1.value));
        }
      }
      dispatch(actions.startAddEmployee(employee, employeeSalaryContents));
      this.props.handleClose();
    } else {
      this.refs.empID.focus();
    }

  }

  onClose() {
    this.props.handleClose();
  }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.modalIsOpen} contentLabel="Add Employee" style={this.customStyle}>
          <div>
            <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
              <h1 className="page-title">Create Employee</h1>
              <div>
                <h3 className="page-title">Basic Details</h3>
                <label>Employee ID :</label><input type="text" ref="empID" placeholder="Employee ID"/>
                <label>First Name :</label><input type="text" ref="empFirstName" placeholder="First Name"/>
                <label>Last Name :</label><input type="text" ref="empLastName" placeholder="Last Name"/>
                <label>Organization :</label><input type="text" ref="empOrganization" placeholder="Organization"/>
                <label>Department :</label><input type="text" ref="empDepartment" placeholder="Department"/>
                <label>Employee Category :</label><input type="text" ref="empCategory" placeholder="Employee Category"/>
                <label>Employee Role :</label><input type="text" ref="empRole" placeholder="Employee Role"/>
              </div>
              <div>
                <h3 className="page-title">Salary Details</h3>
                <label>Basic Salary :</label><input type="text" ref="basic" placeholder="Basic Salary"/>
                <div>
                  <h3 className="page-title">Additions</h3>
                  <button type="button" className="button button-margin" >+</button>
                    <div id="addition_container">
                      <div class="row" id="addition_1">
                        <div class="small-12 medium-6 columns">
                          <label>Name
                            <input type="text" id="aditionName_1" ref="aditionName_1" placeholder="Addition name"/>
                          </label>
                        </div>
                        <div class="small-12 medium-6 columns">
                          <label>Amount
                            <input type="text" id="aditionAmount_1" ref="aditionAmount_1" placeholder="Addition amount"/>
                          </label>
                        </div>
                      </div>
                  </div>
                </div>
                <div>
                  <h3 className="page-title">Deductions</h3>
                    <button type="button" className="button button-margin" >+</button>
                    <div id="deduction_container">
                      <div class="row" id="deduction_1">
                        <div class="small-12 medium-6 columns">
                          <label>Name
                            <input type="text" id="deductionName_1" ref="deductionName_1" placeholder="Deduction name"/>
                          </label>
                        </div>
                        <div class="small-12 medium-6 columns">
                          <label>Amount
                            <input type="text" id="deductionAmount_1" ref="deductionAmount_1" placeholder="Deduction amount"/>
                          </label>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="button button-margin">Create</button>
              <button type="button" className="button button-margin" onClick={this.onClose.bind(this)}>Close</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }

}

AddEmployeeModal.propTypes = {

}

export default connect((state) => {
  return {
    selectedOrganization: state.selectedOrganization
  };
})(AddEmployeeModal);
