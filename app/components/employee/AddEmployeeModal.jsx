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

    this.state ={
      modalIsOpen:true
    }
  //  this.handeSubmit = this.handeSubmit.bind(this);
  }

  handleSubmit (e) {
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
              <label>Employee ID :</label><input type="text" ref="empID" placeholder="Employee ID"/>
              <label>First Name :</label><input type="text" ref="empFirstName" placeholder="First Name"/>
              <label>Last Name :</label><input type="text" ref="empLastName" placeholder="Last Name"/>
              <label>Organization :</label><input type="text" ref="empOrganization" placeholder="Organization"/>
              <label>Department :</label><input type="text" ref="empDepartment" placeholder="Department"/>
              <label>Employee Category :</label><input type="text" ref="empCategory" placeholder="Employee Category"/>
              <label>Employee Role :</label><input type="text" ref="empRole" placeholder="Employee Role"/>
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

export default connect()(AddEmployeeModal);
