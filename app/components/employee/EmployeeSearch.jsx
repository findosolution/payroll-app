import React from 'react';
import {connect} from 'react-redux';

import * as actions from 'actions';

export class EmployeeSearch extends React.Component {
  render () {
    var {dispatch, searchEmployee} = this.props;
    return(
      <div className="container__header">
        <div className="row">
          <div className="large-10 column">
          <input type="search" ref="searchEmployee" value={searchEmployee} placeholder="Search employee" />
        </div>
        <div className="large-2 columns">
          <button type="button" className="button">Search</button>
        </div>

        </div>
      </div>
    );
  }
};

export default  EmployeeSearch;
