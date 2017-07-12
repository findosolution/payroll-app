import axios from 'axios';
import appConfig from 'appConfig';

//const ROOT_URL = appConfig.baseURL;
const ROOT_URL = 'http://localhost:3000/';

module.exports = {
  getOrganizations: function () {
    var requestUrl = `${ROOT_URL}orgs/`;

    return axios.get(requestUrl).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },
  saveOrganization: function (organization) {
    var requestUrl = `${ROOT_URL}orgs/`;

    return axios.post(requestUrl, organization).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },
  removeOrganization: function (did) {
    var requestUrl = `${ROOT_URL}orgs/${did}`;

    return axios.delete(requestUrl).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },
  getOrganizationByDid: function (did) {
    var requestUrl = `${ROOT_URL}orgs/${did}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res;
      }
    }, function (res) {
      throw new Error(res.message);
    });
  },
}
