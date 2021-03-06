var db=require('../../dbconnection'); //reference of dbconnection.js

var Rule = {

  getAllRules : function(callback) {

      var sql =  `Select
                    r.did as did,
                    r.rule as rule,
                    r.type as type,
                    r.adjustment as adjustment
                  from
                    rule r`;
      var contact = {};

      db.query(sql,function (err, result){

        if (err) {
            throw err;
        }

      return callback(result);

    });
  },

  addRule:function(Rule,callback){

    db.beginTransaction(function(err) {

      if (err) { throw err; }

      db.query('Insert into organization_rule SET ?',Rule, function(err, result) {
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

module.exports = Rule;
