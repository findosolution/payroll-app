import React from 'react';

import OrganizationSearch from 'OrganizationSearch';
import OrganizationList from 'OrganizationList';
import AddOrganizationModal from './AddOrganizationModal';
import ViewOrganizationModal from './ViewOrganizationModal';


export default class OrganizationApp extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showAddModal:false,
      showViewModal: false
    };

    this._addOrganization = this._addOrganization.bind(this);
    this._viewOrganization = this._viewOrganization.bind(this);
  }

  _addOrganization(){
    this.setState({
        showAddModal:true
    });
  }

  _viewOrganization(){
    this.setState({
        showViewModal:true
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
            <button type="button" className="button button-margin" onClick={() => this._addOrganization()}>Add</button>
            <button type="button" className="button button-margin" >Delete</button>
          </div>
        </div>
        <OrganizationList viewOrganization={this._viewOrganization}/>

        {
          (this.state.showAddModal)?<AddOrganizationModal/>:null
        }

        {
          (this.state.showViewModal)?<ViewOrganizationModal />:null
        }

      </div>
    );
  }
};
