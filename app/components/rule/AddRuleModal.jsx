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
    let {dispatch} = this.props;
    let Rule = {
      organization: this.refs.organization.value,
      group: this.refs.group.value,
      rule: this.refs.rule.value,
      amount: this.refs.amount.value,
      precedance:8
    };

    dispatch(actions.startAddRule(Rule));
    this.props.handleClose();
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
              <h1 className="page-title">Create Rule</h1>
              <label>Organization :</label><input type="text" ref="organization" placeholder="Organization"/>
              <label>Group :</label><input type="text" ref="group" placeholder="Group"/>
              <label>Rule :</label><input type="text" ref="rule" placeholder="Rule"/>
              <label>Amount :</label><input type="text" ref="amount" placeholder="Amount"/>
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
