import * as ActionTypes from '../constants/actionTypes';

export var searchOrganizationReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_ORGANIZATION':
      return action.searchOrganization;
    default:
      return state;
  };
};

export var organizationReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ORGANIZATIONS':
      return [
        ...action.organizations
      ];
    case 'ADD_ORGANIZATION':
      return [
        ...state,
        action.organization
      ];
    case 'REMOVE_ORGANIZATION':
      let index = state.findIndex((organization) => organization.did === action.did);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  };
};

export var employeeReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EMPLOYEES':
      return [
        ...action.employees
      ];
    case 'ADD_EMPLOYEE':
      return [
        ...state,
        action.employee
      ];
      default:
        return state;
  };
};

export var selectedOrganizationReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_SELECTED_ORGANIZATION':
      return action.organization
    default:
      return state;
  };
};

export const ruleReducer = (state = [], action) => {
  switch(action.type) {
    case ActionTypes.LOAD_RULES_SUCCESS:
      return [
        ...action.rules
      ];
    case ActionTypes.ADD_RULE:
      return [
        ...state,
        action.rule
      ];
    default:
      return state;
  };
};
