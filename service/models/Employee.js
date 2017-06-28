var db=require('../../dbconnection'); //reference of dbconnection.js

var Employee = {

  getAllEmployees : function(callback) {

      var sql = "Select * from employee emp";
      var contact = {};

      db.query(sql,function (err, result){

        if (err) {
            throw err;
        }

      return callback(result);

    });
  },
  addEmployee:function(Employee,callback){

    db.beginTransaction(function(err) {

      if (err) { throw err; }

      db.query('Insert into Employee SET ?',Employee, function(err, result) {
         if (err) {
           db.rollback(function() {
             throw err;
           });
         }

         db.commit(function(err) {
           if (err) {
             db.rollback(function() {
               throw err;
             });
           }
         });

         return callback(result);

       });
    });
  }
}

module.exports = Employee;
