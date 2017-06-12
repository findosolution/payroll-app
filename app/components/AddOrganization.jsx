import React from 'react';

export default class AddOrganization extends React.Component {
  render () {
    return(
      <div>
        <h1 className="page-title">Create company</h1>
        <label>Name :</label><input type="text" ref="orgname" placeholder="Company name"/>
        <label>Address :</label><input type="text" ref="orgaddress" placeholder="Company address"/>
        <label>Contact :</label><input type="text" ref="orgcontact" placeholder="Company contact"/>
        <label>Email :</label><input type="text" ref="orgemail" placeholder="Company email"/>
        <button className="button">Create</button>
      </div>
    );
  }
};
