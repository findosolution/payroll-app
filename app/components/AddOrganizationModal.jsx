import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

var {connect} = require('react-redux');

import * as actions from 'actions';

class AddOrganizationModal extends React.Component{

  handeSubmit (e) {
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
    } else {
      this.refs.orgname.focus();
    }
  }
  componentDidMount() {
    var modalMarkup = (
      <form ref="form" onSubmit={this.handeSubmit.bind(this)}>
        <div id="add-org" className="reveal tiny text-center" data-reveal="">
          <h4>Add Organization</h4>
          <label>Name :</label><input type="text" ref="orgname" placeholder="Company name"/>
          <label>Address :</label><input type="text" ref="orgaddress" placeholder="Company address"/>
          <label>Contact :</label><input type="text" ref="orgcontact" placeholder="Company contact"/>
          <label>Email :</label><input type="text" ref="orgemail" placeholder="Company email"/>
          <button className="button" onClick={this.handeSubmit.bind(this)}>Create</button>
            <button className="button hollow" data-close="">
              Okay
            </button>
        </div>
      </form>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#add-org'));
    modal.open();
  }

  render(){
    return(
      <div>
      </div>
    );
  }

}

AddOrganizationModal.propTypes = {

}

export default AddOrganizationModal;
