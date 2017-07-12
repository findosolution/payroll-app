import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';


class ViewRuleModal extends React.Component{

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
        <Modal isOpen={this.state.modalIsOpen} contentLabel="View Rule">
          <div>
              <label>Name :</label><label>TEST company</label>
              <label>Address :</label><label>Colombo</label>
              <label>Contact :</label><label>077 777 77 77</label>
              <label>Email :</label><label>testcomp@test.com</label>
          </div>
        </Modal>
      </div>
    );
  }

}

ViewRuleModal.propTypes = {

}

export default ViewRuleModal;
