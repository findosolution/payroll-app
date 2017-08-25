import Modal from 'react-modal';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
var {connect} = require('react-redux');

import * as actions from 'actions';


class AddOrgRuleModal extends React.Component{

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

  componentDidMount(){
    this._loadRules();
  }

  _loadRules(){
    let {dispatch} = this.props;
    dispatch(actions.loadRules());
  }

  handleSubmit (e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let OrgRule = {
      organization: 16,
      group: this.refs.group.value,
      rule: this.refs.rule.value,
      amount: this.refs.amount.value,
      precedance:8
    };

    dispatch(actions.startAddOrgRule(OrgRule));
    this.props.handleClose();
  }

  onClose() {
    this.props.handleClose();
  }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.modalIsOpen} contentLabel="Add Organization Rule" style={this.customStyle}>
          <div>
            <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
              <h1 className="page-title">Create Organization Rule</h1>
              <label>Organization :</label>
              <input type="text" ref="organization" placeholder="Organization"/>
              <label>Group :</label><input type="text" ref="group" placeholder="Group"/>
              <label>Rule :</label>
              <select>
                <option></option>
              </select>
              <input type="text" ref="rule" placeholder="Rule"/>
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

AddOrgRuleModal.propTypes = {

}

export default connect()(AddOrgRuleModal);
