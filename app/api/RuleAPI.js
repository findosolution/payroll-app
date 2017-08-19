import axios from 'axios';
import appConfig from 'appConfig';

const ROOT_URL = 'http://localhost:3000/';

var RuleAPI = {

  getAllRules : function () {

    var requestUrl =`${ROOT_URL}rules/`;

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

  saveRule: function (rule) {
    var requestUrl = `${ROOT_URL}rules/`;

    return axios.post(requestUrl, rule).then(function (res) {
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

module.exports = RuleAPI;
