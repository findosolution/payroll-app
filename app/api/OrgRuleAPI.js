import axios from 'axios';
import appConfig from 'appConfig';

const ROOT_URL = 'http://localhost:3000/';

var OrgRuleAPI = {

  getAllOrgRules : function () {

    var requestUrl =`${ROOT_URL}orgRules/`;

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

  saveOrgRule: function (orgRule) {
    var requestUrl = `${ROOT_URL}orgRules/`;

    return axios.post(requestUrl, orgRule).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },

};

module.exports = OrgRuleAPI;
