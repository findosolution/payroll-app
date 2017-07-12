var db=require('../../dbconnection'); //reference of dbconnection.js

var Employee = {

  getAllEmployees : function(callback, organizationDid) {

      var sql = "Select * from employee emp ";
      if(organizationDid) {
        sql = `${sql} where organization = ?`;
      }

      db.query(sql, [organizationDid], function (err, result){

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
