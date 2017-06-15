import React from 'react';

export default class Organization extends React.Component {
  render() {
    var {id, name, address, contact, email} = this.props;
    return(
            <tr>
              <td>{name}</td>
              <td>{address}</td>
              <td>{contact}</td>
              <td>{email}</td>
            </tr>
    );
  }
};
