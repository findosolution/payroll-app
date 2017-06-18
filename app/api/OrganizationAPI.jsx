import axios from 'axios';

const ROOT_URL_ORGANIZATION = '';

module.exports = {
  getOrganizations: function () {
    var param = ''; //param come as a parameter
    var encodedparam = encodeURIComponent(param);
    var requestUrl = `${ROOT_URL_ORGANIZATION}&q=${encodedparam}`;

    /*return axios.get(requestUrl).then(function (res) {
      if (res.cod && res.cod != 200 && res.message) {
        throw new Error(res.message);
      } else {
        return res.data;
      }
    }, function (res) {
      throw new Error(res.message);
    }); */

    var organizations = [
      {
        id: 1,
        name: 'EML Consultants',
        address : "Colombo",
        contact : "077 777 77 77",
        email : "testAPI@test.com"
      },{
        id: 2,
        name: 'ABC Company',
        address : "Colombo",
        contact : "077 777 77 77",
        email : "testAPI@test.com"
      }
    ];

    return organizations;

  }
}
