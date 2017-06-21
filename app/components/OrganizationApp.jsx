import React from 'react';

import OrganizationSearch from 'OrganizationSearch';
import OrganizationList from 'OrganizationList';
import AddOrganizationModal from './AddOrganizationModal';


export default class OrganizationApp extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal:false
    };

    this._addOrganization = this._addOrganization.bind(this);
  }

  _addOrganization(){
    this.setState({
        showModal:true
    });
  }

  render () {
    return(
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h2>Organizations</h2>
          </div>
        </div>
        <div className="row">
          <div className="large-6 columns">
            <OrganizationSearch/>
          </div>
          <div className="large-3 large-offset-3 columns">
            <button type="button" className="button" onClick={() => this._addOrganization()}>Add</button>
          </div>
        </div>
        <OrganizationList/>

        {
          (this.state.showModal)?<AddOrganizationModal/>:null
        }

      </div>
    );
  }
};
