import * as OrganizationAPI from 'OrganizationAPI';
import * as EmployeeAPI from 'EmployeeAPI';
import * as EmployeeSalaryAPI from 'EmployeeSalaryAPI';
import * as RuleAPI from 'RuleAPI';
import * as ActionTypes from '../constants/actionTypes';

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

    return OrganizationAPI.saveOrganization(organizationTobeSave).then((snapshot) => {

      dispatch(addOrganization({
        ...organization,

      }));
    }, (e) => {
      console.log('Unable to save Organization');
    });
  };
};

export var removeOrganization = (did) => {
  return {
    type: 'REMOVE_ORGANIZATION',
    did
  };
};

export var startRemoveOrganization = (did) => {
  return (dispatch, getState) => {
    return OrganizationAPI.removeOrganization(did).then((snapshot) => {
      dispatch(removeOrganization(did));
    }, (e) => {
      console.log('Unable to save Organization');
    });
  };
};

export var setSelectedOrganization = (organization) => {
  return {
    type: 'SET_SELECTED_ORGANIZATION',
    organization
  };
}

export var setSelectedOrganizationFromAPI = (did) => {
  return (dispatch, getState) => {
    return OrganizationAPI.getOrganizationByDid(did).then((snapshot) => {
      console.log(snapshot.data);
      dispatch(setSelectedOrganization(snapshot.data[0]));
    }, (e) => {
      console.log('Unable to get data');
    });
  }
};

export var addEmployees = (employees) => {
  return {
    type: 'ADD_EMPLOYEES',
    employees
  };
};

export var startAddEmployees = () => {
  return (dispatch, getState) => {
    return EmployeeAPI.getAllEmployees().then((snapshot) => {
      dispatch(addEmployees(snapshot.data));
    }, (e) => {
      console.log('Unable to get data');
    });
  }
};

export var addEmployee = (employee) => {
  return {
    type: 'ADD_EMPLOYEE',
    employee
  };
};

export var startAddEmployee = (employee, salaryContents) => {
  return ((dispatch, getState) => {
    debugger;
    return EmployeeAPI.saveEmployee(employee).then((snapshot) => {
      console.log('Employee :',snapshot.data);
      employee.did = snapshot.data.insertId;
      dispatch(addSalaryContents(employee.did, salaryContents))
      dispatch(addEmployee({
        ...employee
      }));

    }, (e) => {
      console.log('Unable to save employee');
    });
  });
};

/*export var startAddEmployee = (employee) => {
  return ((dispatch, getState) => {
    debugger;
    var salaryContents = employee.salaryContent;
    delete employee.salaryContent;

    return EmployeeAPI.saveEmployee(employee).then((snapshot) => {
      console.log('Employee :',snapshot.data);
      employee.did = snapshot.data.insertId;
      let ee= employee.did;
      let sc = salaryContents;
      return {ee,sc}
    }, (e) => {
      console.log('Unable to save employee');
    }).then((ff) => {
      dispatch(addSalaryContents(ff.ee, ff.sc));
    });
  });
};*/

export var loadEmplyeesForOrganization = (organizationDid) => {
  return (dispatch, getState) => {
    return EmployeeAPI.getEmployeesByOrganization(organizationDid).then((snapshot) => {
      dispatch(addEmployees(snapshot.data));
    }, (e) => {
      console.log('Unable to get data');
    });
  }
};

export var addSalaryContents = (did,salaryContents) => {
  return ((dispatch, getState) => {
    return EmployeeSalaryAPI.saveContentsByEmployee(did,salaryContents).then((snapshot) => {
      console.log('SalaryContents :', snapshot.data);
      //employee.did = snapshot.data.insertId;
      /*dispatch(addEmployee({
        ...employee
      }));*/

    }, (e) => {
      console.log('Unable to save salaryContents');
    });
  });
};

export const loadRulesSuccess = (rules) => {
  return {
    type: ActionTypes.LOAD_RULES_SUCCESS,
    rules
  };
};

export const loadRules = () => {
  return (dispatch, getState) => {
    return RuleAPI.getAllRules().then((snapshot) => {
      console.log("Snapshot ====>",snapshot.data);
      dispatch(loadRulesSuccess(snapshot.data));
    }, (e) => {
      console.log('Unable to get data');
    });
  }
}
