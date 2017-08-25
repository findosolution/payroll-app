import React from 'react';

import OrgRuleSearch from './OrgRuleSearch';
import OrgRuleList from './OrgRuleList';
import AddOrgRuleModal from './AddOrgRuleModal';
import ViewOrgRuleModal from './ViewOrgRuleModal';


export default class OrgRuleApp extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      showAddModal:false,
      showViewModal: false
    };

    this._addRule = this._addRule.bind(this);
    this._viewRule = this._viewRule.bind(this);
    this._hideRuleModal = this._hideRuleModal.bind(this);
  }

  _addRule(){
    this.setState({
        showAddModal:true
    });
  }

  _hideRuleModal(){
    this.setState({
        showAddModal:false
    });
  }

  _viewRule(){
    this.setState({
        showViewModal:true
    });
  }

  render () {
    return(
      <div>
        <div className="row">
          <div className="large-12 columns">
            <h2>Rules</h2>
          </div>
        </div>
        <div className="row">
          <div className="large-6 columns">
            <OrgRuleSearch/>
          </div>
          <div className="large-3 large-offset-3 columns">
            <button type="button" className="button button-margin" onClick={() => this._addRule()}>Add</button>
            <button type="button" className="button button-margin" >Delete</button>
          </div>
        </div>
        <OrgRuleList viewRule={this._viewRule}/>

        {
          (this.state.showAddModal)?<AddOrgRuleModal handleClose={this._hideRuleModal}/>:null
        }

        {
          (this.state.showViewModal)?<ViewOrgRuleModal />:null
        }

      </div>
    );
  }
};
