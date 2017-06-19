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
    default:
      return state;
  };
}
