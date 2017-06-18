export var setSearchOrganization = (searchOrganization) => {
  return {
    type: 'SET_SEARCH_ORGANIZATION',
    searchOrganization
  };
};

export var addOrganizations = (organizations) => {
  return {
    type: 'ADD_ORGANIZATIONS',
    organizations
  };
};
