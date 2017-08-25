import React from 'react';
import * as actions from 'actions';
var {connect} = require('react-redux');


export  class OrgRule extends React.Component {
  render() {
    var {did,grp, rule, amount, type} = this.props;
    var {dispatch} = this.props;
    return(

            <tr>
            {/*<tr onClick={() => this.props.viewRule() }>*/}
              <td>
                <button type="button" id={did}
                  className="button small success button-margin"
                  onClick={() => dispatch(actions.startRemoveOrgRule(did))}>Remove</button>
              </td>
              <td>{grp}</td>
              <td>{rule}</td>
              <td>{amount}</td>
              <td>{type}</td>
            </tr>
    );
  }
};

export default connect()(OrgRule);
