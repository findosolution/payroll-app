var db=require('../../dbconnection'); //reference of dbconnection.js

var EmployeeSalaryContent = {

  getContentByID : (empId, contentId, callback) => {

    var sql = "select * from emplyeesalary where employee = ? and did = ? ";
    return db.query(sql, [empId, contentId], (err, result) => {

      if (err) {
          throw err;
      }

      return callback(result);
    });
  },
  getAllContentsByEmp : (empId, callback) => {

    var sql = "select * from emplyeesalary where employee = ? ";
    return db.query(sql, [empId], (err, result) => {

      if (err) {
          throw err;
      }

      return callback(result);
    });
  },
  addContent : (empId, emplyeeSalary, callback) => {
    db.beginTransaction( (err) => {

      if (err) { throw err };
      var sql = "insert into emplyeesalary SET ? ";
      db.query(sql, [emplyeeSalary], (err, result) => {
         if (err) { db.rollback(() => { throw err}) };

         db.commit((err) => {
           if (err) { db.rollback(() => { throw err }) };
         });

         emplyeeSalary.did = result.insertId;
         return callback(emplyeeSalary);

       });
    });
  },
  deleteContent : (empId, callback) => {
    var sql = "delete from emplyeesalary where did = ? ";
    return db.query(sql, [empId], (err, result) => {
      if (err) { throw err };

       return callback(result);
    });
  },
  updateContent : (emplyeeSalary,callback) => {
    return callback('to be done');
  },
}

module.exports = EmployeeSalaryContent;
