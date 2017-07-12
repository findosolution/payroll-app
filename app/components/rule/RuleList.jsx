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
              <th>Rule</th>
              <th>Group</th>
              <th>Org</th>
              <th>Val</th>
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