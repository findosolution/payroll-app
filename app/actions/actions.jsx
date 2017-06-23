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

export var startAddOrganizations = () => {
  return (dispatch, getState) => {
    return OrganizationAPI.getOrganizations().then((snapshot) => {
      console.log(snapshot);
      dispatch(addOrganizations(snapshot.data));
    }, (e) => {
      console.log('Unable to get data');
    });
  }
};

export var addOrganization = (organization) => {
  return {
    type: 'ADD_ORGANIZATION',
    organization
  };
};

export var startAddOrganization = (organization) => {
  return (dispatch, getState) => {
    var contact = {
      addresstypedid: organization.addresstypedid,
      address1: organization.address1,
      mobile: organization.mobile,
      email: organization.email,
      postalcode: organization.postalcode,
      city: organization.city,
      country: organization.country,
    }

    var organizationTobeSave = {
      name: organization.name,
      code: organization.code,
      active: organization.active,
      contact: contact
    }

    return OrganizationAPI.getOrganizations().then((snapshot) => {
      console.log(snapshot);
      dispatch(addOrganization({
        ...organization,
        did: snapshot.data.orgdid,
        addressdid: snapshot.data.addressdid
      }));
    }, (e) => {
      console.log('Unable to get data');
    });
  };
};
