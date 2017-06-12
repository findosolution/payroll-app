import React from 'react';

export default class User extends React.Component {
  render () {
    return(
      <div>
        <h1 className="page-title">Create user</h1>
        <label>First name :</label><input type="text" ref="fname" placeholder="First name"/>
        <label>Last name :</label><input type="text" ref="lname" placeholder="Last name"/>
        <label>Username :</label><input type="text" ref="username" placeholder="Username"/>
        <label>Email :</label><input type="text" ref="email" placeholder="Email"/>
        <label>Mobile :</label><input type="text" ref="mobile" placeholder="Mobile"/>
        <button className="button">Create</button>
      </div>
    );
  }
};
