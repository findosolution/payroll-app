import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchOrganizationReducer, organizationReducer, employeeReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchOrganization: searchOrganizationReducer,
    organizations: organizationReducer,
    employees : employeeReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
