import React from 'react';
var {connect} = require('react-redux');

import * as actions from 'actions';
import Rule from './Rule';
import * as RuleAPI from 'RuleAPI';
import * as RuleUtil from 'RuleUtil';

export class RuleList extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    var {dispatch} = this.props;
    dispatch(actions.loadRules());
  }

  render () {
    let renderRules = () => {
      let {rules} = this.props;
      console.log("^^^^^ RULES ^^^^^");
      console.log(rules);
      return rules.map((rule) => {
        return (
          <Rule key={rule.id} {...rule}  />
        );
      });
    };
    return(
      <div className="row">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Organization</th>
              <th>Group</th>
              <th>Rule</th>
              <th>Value</th>
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
    rules: state.rules,
    searchRule: state.searchRule
  };
})(RuleList);
