var db=require('../../dbconnection'); //reference of dbconnection.js

var Rule = {

  getAllRules : function(callback) {

      var sql = "Select * from company_rule";
      var contact = {};

      db.query(sql,function (err, result){

        if (err) {
            throw err;
        }

      return callback(result);

    });
  }
}

module.exports = Rule;
