var db=require('../dbconnection'); //reference of dbconnection.js

var Organization={

    getAllTasks:function(callback){

    return db.query("Select * from organization",callback);

    },

    getTaskById:function(did,callback){

    return db.query("select * from organization where did=?",[did],callback);
     },

    addTask:function(Organization,callback){
      return db.query("Insert into organization values(?,?,?,?,?)",[Organization.did,Organization.Name,Organization.Code,Organization.AddressDID,Organization.Active],callback);
    },

    deleteTask:function(did,callback){
      return db.query("delete from organization where did=?",[did],callback);
     },

    updateTask:function(did,Organization,callback){
     return db.query("update organization set Name=?,Code=?,AddressDID=?,Active=? where did=?",[Organization.Name,Organization.Code,Organization.AddressDID,Organization.Active,did],callback);
    }

};

module.exports=Organization;
