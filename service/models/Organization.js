var db=require('../../dbconnection'); //reference of dbconnection.js

var Organization = {

    getAllOrganizations:function(callback){

      var sql = "Select * from organization org, contact co where org.addressdid = co.addressdid";
      var contact = {};

      return db.query(sql,function (err, result){

        if (err) {
            throw err;
        }

      return callback(result);

      });
    },

    getOrganizationById:function(did,callback) {

     var sql ="select * from organization org, contact co where did=? and co.addressdid = org.addressdid";
     var contact = {};

     return db.query(sql,[did],function (err, result){

       if (err) {
           throw err;
       }

       return callback(result);

     });
    },

    addOrganization:function(Organization,callback){

      var Contact = Organization.contact;

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

           db.query("Insert into organization values(?,?,?,?,?)",[Organization.did,Organization.name,Organization.code,addressdid,Organization.active], function(err, result) {

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
    },
    deleteOrganization:function(did,callback){
      return db.query("delete from organization where did=?",[did],callback);
    },

    updateOrganization:function(did,Organization,callback){

    var sqlUpdate = "update organization set ";
    var params = [];

    if(Organization.name) {
      sqlUpdate +="name=?";
      params.push(Organization.name);
    }

    if(Organization.code) {
      sqlUpdate +=", code=?";
      params.push(Organization.code);
    }

    if(Organization.addressdid) {
      sqlUpdate +=", addressdid=?";
      params.push(Organization.addressdid);
    }

    if(Organization.active) {
      sqlUpdate +=", active=?";
      params.push(Organization.active);
    }

    sqlUpdate +=" where did=?";
    params.push(did);

    sqlUpdate = sqlUpdate.replace(/set , /i, "set ");

    console.log (" sql===> "+ sqlUpdate);
    console.log (" params===> "+ params);

    db.beginTransaction(function(err) {

        if (err) { throw err; }

        return db.query(sqlUpdate,params,callback,function (err , result) {
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
        console.log('Transaction Complete.');
        return callback(result);
      });
    });
  }
}
module.exports=Organization;
