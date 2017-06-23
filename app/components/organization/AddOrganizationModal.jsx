import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
var {connect} = require('react-redux');

import * as actions from 'actions';


class AddOrganizationModal extends React.Component{

  constructor(props,context){
    super(props,context);

    this.state ={
      modalIsOpen:true
    }
  //  this.handeSubmit = this.handeSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    var orgName = this.refs.orgname.value;

    if(orgName.length > 0) {
      var {dispatch} = this.props;
      var organization = {
        name: orgName,
        address: this.refs.orgname.value,
        contact: this.refs.orgcontact.value,
        email: this.refs.orgemail.value
      };
      //add org to database, that may return id ? should we need to move these to action ?? Prasad ??
      organization = {...organization, id: 100};
      dispatch(actions.addOrganization(organization));
      this.props.handleClose();
    } else {
      this.refs.orgname.focus();
    }
  }

  onClose() {
    this.props.handleClose();
  }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.modalIsOpen} contentLabel="Add Organization">
          <div>
            <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
              <h1 className="page-title">Create company</h1>
              <label>Name :</label><input type="text" ref="orgname" placeholder="Company name"/>
              <label>Address :</label><input type="text" ref="orgaddress" placeholder="Company address"/>
              <label>Contact :</label><input type="text" ref="orgcontact" placeholder="Company contact"/>
              <label>Email :</label><input type="text" ref="orgemail" placeholder="Company email"/>
              <button type="submit" className="button button-margin">Create</button>
              <button type="button" className="button button-margin" onClick={this.onClose.bind(this)}>Close</button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }

}

AddOrganizationModal.propTypes = {

}

export default connect()(AddOrganizationModal);
