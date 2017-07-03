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
        ...state,
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
}


export var employeeReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EMPLOYEES':
      return [
        ...state,
        ...action.employees
      ];

    default:
      return state;
  };
}
