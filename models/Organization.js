var db=require('../dbconnection'); //reference of dbconnection.js

var Organization = {

    getAllOrganizations:function(callback){
      return db.query("Select * from organization",callback);
    },

    getOrganizationById:function(did,callback){
     return db.query("select * from organization where did=?",[did],callback);
    },

    addOrganization:function(Organization,callback){

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
    },
    deleteOrganization:function(did,callback){
      return db.query("delete from organization where did=?",[did],callback);
    },

    updateOrganization:function(did,Organization,callback){

    var sqlUpdate = "update organization set ";
    var params = [];

    if(Organization.Name) {
      sqlUpdate +="Name=?";
      params.push(Organization.Name);
    }

    if(Organization.Code) {
      sqlUpdate +=", Code=?";
      params.push(Organization.Code);
    }

    if(Organization.AddressDID) {
      sqlUpdate +=", AddressDID=?";
      params.push(Organization.AddressDID);
    }

    if(Organization.Active) {
      sqlUpdate +=", Active=?";
      params.push(Organization.Active);
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
