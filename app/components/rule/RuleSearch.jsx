import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class RuleSearch extends React.Component {
  render () {
    var {dispatch, searchRule} = this.props;
    return(
      <div className="container__header">
        <div className="row">
          <div className="large-10 column">
          <input type="search" ref="searchRule" value={searchRule} placeholder="Search Rule" onChange={() => {
              dispatch(actions.setSearchRule(this.refs.searchRule.value));
            }}/>
        </div>
        <div className="large-2 columns">
          <button type="button" className="button">Search</button>
        </div>

        </div>
      </div>
    );
  }
};

export default connect((state) => {
  return {
    searchRule: state.searchRule
  };
})(RuleSearch);
