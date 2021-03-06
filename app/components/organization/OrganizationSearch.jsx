import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class OrganizationSearch extends React.Component {
  render () {
    var {dispatch, searchOrganization} = this.props;
    return(
      <div className="container__header">
        <div className="row">
          <div className="large-10 column">
          <input type="search" ref="searchOrganization" value={searchOrganization} placeholder="Search organization" onChange={() => {
              dispatch(actions.setSearchOrganization(this.refs.searchOrganization.value));
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
    searchOrganization: state.searchOrganization
  };
})(OrganizationSearch);
