import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';

export class AddOrganization extends React.Component {
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
  render () {
    return(
      <div>
        <form ref="form" onSubmit={this.handeSubmit.bind(this)}>
          <h1 className="page-title">Create company</h1>
          <label>Name :</label><input type="text" ref="orgname" placeholder="Company name"/>
          <label>Address :</label><input type="text" ref="orgaddress" placeholder="Company address"/>
          <label>Contact :</label><input type="text" ref="orgcontact" placeholder="Company contact"/>
          <label>Email :</label><input type="text" ref="orgemail" placeholder="Company email"/>
          <button className="button">Create</button>
        </form>
      </div>
    );
  }
};

export default connect()(AddOrganization);
