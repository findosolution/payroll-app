import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
var {connect} = require('react-redux');

import * as actions from 'actions';


class AddRuleModal extends React.Component{

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
    e.preventDefault();
    var orgName = this.refs.orgname.value;

    if(orgName.length > 0) {
      var {dispatch} = this.props;
      var Rule = {
        name: orgName,
        code: "DEdF",
        active: 1,
        addresstypedid: "1",
        address1: this.refs.orgaddress.value,
        postalcode: 0,
        city: "",
        country: "Sri Lanka",
        email: this.refs.orgemail.value,
        mobile: this.refs.orgcontact.value
      };

      dispatch(actions.startAddRule(Rule));
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
        <Modal isOpen={this.state.modalIsOpen} contentLabel="Add Rule" style={this.customStyle}>
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

AddRuleModal.propTypes = {

}

export default connect()(AddRuleModal);
