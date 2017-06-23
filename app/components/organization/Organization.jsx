import React from 'react';

export default class Organization extends React.Component {
  render() {
    var {did, name, address1, country, mobile, email} = this.props;
    var address = `${address1}, ${country}`;
    return(
            <tr onClick={() => this.props.viewOrganization() }>
              <td>
                <input id={did} type="checkbox" />
              </td>
              <td>{name}</td>
              <td>{address}</td>
              <td>{mobile}</td>
              <td>{email}</td>
            </tr>
    );
  }
};
