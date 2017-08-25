import axios from 'axios';
import appConfig from 'appConfig';

const ROOT_URL = 'http://localhost:3000/';

var EmployeeSalaryAPI = {

  saveContentsByEmployee : function (empId, salaryContents) {
    var requestUrl =`${ROOT_URL}emp-api/${empId}/salaryContent/`;
    return axios.post(requestUrl, salaryContents).then(function(res){
      if(res.cod && res.cod !=200 && res.message) {
        throw new Error(res.message);
      } else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },

  getContentsByEmployee : (empId) => {
    var requestUrl =`${ROOT_URL}emp-api/${empId}/salaryContent/`;

    /*if(organizationDid) {
      requestUrl =`${requestUrl}?orgId=${organizationDid}`;
    }*/
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

module.exports = EmployeeSalaryAPI;
