var db=require('../../dbconnection'); //reference of dbconnection.js

var OrgRule = {

  getAllRules : function(callback) {

      var sql =  `Select
                    r.rule,
                    cr.organization,
                    cr.group as grp,
                    cr.amount,
                    rt.type,
                    cr.did
                  from
                    organization_rule cr
                    join rule r
                    join rule_type rt
                  where
                    cr.rule = r.did
                    and r.type = rt.did `;
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
  },


  deleteRule:function(did,callback){
    return db.query("delete from organization_rule where did=?",[did],callback);
  },
}

module.exports = OrgRule;
