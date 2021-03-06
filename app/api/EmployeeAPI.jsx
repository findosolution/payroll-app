import axios from 'axios';
import appConfig from 'appConfig';

const ROOT_URL = 'http://localhost:3000/';

var EmployeeAPI = {

  getAllEmployees : function () {

    var requestUrl =`${ROOT_URL}emp-api/`;

    return axios.get(requestUrl).then(function(res){
      if(res.cod && res.cod !=200 && res.message) {
        throw new Error(res.message);
      }else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },

  saveEmployee : function (employee) {
    var requestUrl =`${ROOT_URL}emp-api/`;

    return axios.post(requestUrl, employee).then(function(res){
      if(res.cod && res.cod !=200 && res.message) {
        throw new Error(res.message);
      }else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },

  getEmployeesByOrganization : (organizationDid) => {
    var requestUrl =`${ROOT_URL}emp-api`;

    if(organizationDid) {
      requestUrl =`${requestUrl}?orgId=${organizationDid}`;
    }
    console.log('requestUrl:', requestUrl)
    return axios.get(requestUrl).then(function(res){
      if(res.cod && res.cod !=200 && res.message) {
        throw new Error(res.message);
      }else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  }

};

module.exports = EmployeeAPI;
