import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


class ViewEmployeeModal extends React.Component{

  constructor(props,context){
    super(props,context);

    this.state ={
      modalIsOpen:true,

    }

  //  this.handeSubmit = this.handeSubmit.bind(this);
  }


  render(){
    return(
      <div>
        <Modal isOpen={this.state.modalIsOpen} contentLabel="View Organization">
          <div>
              <label>Employee ID :</label>
              <label>First Name :</label>
              <label>Last Name :</label>
              <label>Organization :</label>
              <label>Department :</label>
              <label>Employee Category :</label>
              <label>Employee Role</label>
          </div>
        </Modal>
      </div>
    );
  }

}

ViewEmployeeModal.propTypes = {

}

export default ViewEmployeeModal;
