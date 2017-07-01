import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchOrganizationReducer, organizationReducer, selectedOrganizationReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchOrganization: searchOrganizationReducer,
    organizations: organizationReducer,
    selectedOrganization: selectedOrganizationReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
