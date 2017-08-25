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
  addContents : (empId, emplyeeSalaries, callback) => {
    db.beginTransaction( (err) => {
      console.log("emplyeeSalaries :", emplyeeSalaries);
      if (err) { throw err };

      emplyeeSalaries.forEach((contents) => {
        contents.push(empId, null, null);
      });

      var sql = "insert into emplyeesalary (adddeductstatus, amount, description, employee, validfrom, validuntil) VALUES ? ";
      db.query(sql, [emplyeeSalaries], (err, result) => {
         if (err) { db.rollback(() => { throw err}) };

         db.commit((err) => {
           if (err) { db.rollback(() => { throw err }) };
         });
       });
       return callback(emplyeeSalaries);
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
