import React from 'react';

export default class OrgRule extends React.Component {
  render() {
    var {id,grp, rule, amount, type} = this.props;
    return(
            <tr onClick={() => this.props.viewRule() }>
              <td>
                <input id={id} type="checkbox" />
              </td>
              <td>{grp}</td>
              <td>{rule}</td>
              <td>{amount}</td>
              <td>{type}</td>
            </tr>
    );
  }
};
