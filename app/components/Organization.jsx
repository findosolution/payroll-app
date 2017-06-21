import React from 'react';

export default class Organization extends React.Component {
  render() {
    var {id, name, address, contact, email} = this.props;
    return(
            <tr onClick={() => this.props.viewOrganization() }>
              <td>
                <input type="checkbox" />
              </td>
              <td>{name}</td>
              <td>{address}</td>
              <td>{contact}</td>
              <td>{email}</td>
            </tr>
    );
  }
};
