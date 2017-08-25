import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class OrgRuleSearch extends React.Component {
  render () {
    var {dispatch, searchOrgRule} = this.props;
    return(
      <div className="container__header">
        <div className="row">
          <div className="large-10 column">
          <input type="search" ref="searchRule" value={searchOrgRule} placeholder="Search Rule" onChange={() => {
              dispatch(actions.setSearchOrgRule(this.refs.searchRule.value));
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
    searchOrgRule: state.searchOrgRule
  };
})(OrgRuleSearch);
