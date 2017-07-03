import * as redux from 'redux';
import thunk from 'redux-thunk';

<<<<<<< HEAD
import {searchOrganizationReducer, organizationReducer, employeeReducer} from 'reducers';
=======
import {searchOrganizationReducer, organizationReducer, selectedOrganizationReducer} from 'reducers';
>>>>>>> 1277d88b1412b842b9df35fdf4c95c9079e92934

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchOrganization: searchOrganizationReducer,
    organizations: organizationReducer,
<<<<<<< HEAD
    employees : employeeReducer
=======
    selectedOrganization: selectedOrganizationReducer
>>>>>>> 1277d88b1412b842b9df35fdf4c95c9079e92934
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
