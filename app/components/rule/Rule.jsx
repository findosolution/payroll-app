import React from 'react';

export default class Rule extends React.Component {
  render() {
    var {id,grp, organization, rule, value, type} = this.props;
    return(
            <tr onClick={() => this.props.viewRule() }>
              <td>
                <input id={id} type="checkbox" />
              </td>
              <td>{rule}</td>
              <td>{grp}</td>
              <td>{organization}</td>
              <td>{value}</td>
            </tr>
    );
  }
};
