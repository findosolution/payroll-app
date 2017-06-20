var db=require('../dbconnection'); //reference of dbconnection.js

var Organization = {

    getAllTasks:function(callback){
      return db.query("Select * from organization",callback);
    },

    getTaskById:function(did,callback){
     return db.query("select * from organization where did=?",[did],callback);
    },

    addTask:function(Organization,callback){

      var Contact = Organization.Contact;

      db.beginTransaction(function(err) {

        if (err) { throw err; }

        db.query('Insert into Contact SET ?',Contact, function(err, result) {
           if (err) {
             db.rollback(function() {
               throw err;
             });
           }

           var addressdid = result.insertId;
           console.log(result);

           db.query("Insert into organization values(?,?,?,?,?)",[Organization.did,Organization.Name,Organization.Code,addressdid,Organization.Active], function(err, result) {

              if (err) {
                db.rollback(function() {
                  throw err;
                });
              }
              var orgdid = result.insertId;
              db.commit(function(err) {
                if (err) {
                  db.rollback(function() {
                    throw err;
                  });
                }
                console.log('Transaction Complete.');
                return callback({"addressdid" : addressdid, "orgdid" : orgdid });
              });

            });

         });
      });
      //return db.query("Insert into organization values(?,?,?,?,?)",[Organization.did,Organization.Name,Organization.Code,Organization.AddressDID,Organization.Active],callback);
    },

    deleteTask:function(did,callback){
      return db.query("delete from organization where did=?",[did],callback);
     },

    updateTask:function(did,Organization,callback){
     return db.query("update organization set Name=?,Code=?,AddressDID=?,Active=? where did=?",[Organization.Name,Organization.Code,Organization.AddressDID,Organization.Active,did],callback);
    }

};

module.exports=Organization;
