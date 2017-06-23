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
    return OrganizationAPI.getOrganizations().then((snapshot) => {
      dispatch(addOrganizations(snapshot.data));
      /*var todos = snapshot.val() || {};
      var passedTodos = [];
      Object.keys(todos).forEach((todoId) => {
        passedTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });

      dispatch(addTodos(snapshot.data));*/
      console.log(snapshot);
    }, (e) => {
      console.log('Unable to get data');
    });
  }
};
