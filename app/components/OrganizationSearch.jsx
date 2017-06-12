import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class OrganizationSearch extends React.Component {
  render () {
    var {dispatch, searchOrganization} = this.props;
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="searchOrganization" value={searchOrganization} placeholder="Search organization" onChange={() => {
              dispatch(actions.setSearchOrganization(this.refs.searchOrganization.value));
            }}/>
        </div>
      </div>
    );
  }
};

/*export default connect((state) => {
  return(
    searchOrganization : state.searchOrganization
  );
})(OrganizationSearch);*/

export default connect(
  (state) => {
    return state;
  }
)(OrganizationSearch);
