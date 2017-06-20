import * as OrganizationAPI from 'OrganizationAPI';

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

export var addOrganization = (organization) => {
  return {
    type: 'ADD_ORGANIZATION',
    organization
  };
};

export var startAddOrganizations = () => {
  return (dispatch, getState) => {
    var organizations = OrganizationAPI.getOrganizations();
    dispatch(addOrganizations(organizations));
  }
};
