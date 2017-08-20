import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';
import OrgRule from './OrgRule';
import * as OrgRuleAPI from 'OrgRuleAPI';
import * as OrgRuleUtil from 'OrgRuleUtil';

export class OrgRuleList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var {dispatch} = this.props;
    dispatch(actions.loadOrgRules());
  }

  render () {
    let renderRules = () => {
      let {orgRules} = this.props;
      console.log("^^^^^ ORG RULES ^^^^^");
      console.log(orgRules);
      return orgRules.map((orgRule) => {
        return (
          <OrgRule key={orgRule.id} {...orgRule}  />
        );
      });
    };
    return(
      <div className="row">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Group</th>
              <th>Rule</th>
              <th>Amount</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
          {renderRules()}
          </tbody>
        </table>
      </div>
    );
  }
};

export default connect((state) => {
  return {
    orgRules: state.orgRules,
    searchOrgRule: state.searchOrgRule
  };
})(OrgRuleList);
