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

<<<<<<< HEAD

export var employeeReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_EMPLOYEES':
      return [
        ...state,
        ...action.employees
      ];

=======
export var selectedOrganizationReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_SELECTED_ORGANIZATION':
      return action.organization
>>>>>>> 1277d88b1412b842b9df35fdf4c95c9079e92934
    default:
      return state;
  };
}
